import { useEffect } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import NotFound from './components/organisms/NotFound';
import Root from './pages/Root';
import Home from './components/organisms/Home';
import Shop from './components/organisms/Shop';
import AddToCard from './components/organisms/AddToCard';
import Billing from './components/organisms/Billing';
import Productdes from './components/organisms/Productdes';
import Login from './components/organisms/Login';
import Signin from './components/organisms/Signin';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Faq from './pages/Faq';
import Profileroot from './pages/Profile.root';
import EditProfile from './pages/Profile/EditProfile';
import ProfileDashboard from './pages/Profile/ProfileDashboard';
import ViewOrderDetails from './pages/Profile/ViewOrderDetails';
import { QueryClientProvider } from '@tanstack/react-query';
import { useSelector,useDispatch  } from 'react-redux';
//Redux toolkit
import { addToken } from './Redux/reducers/user-reducer';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



//router
const Router = createBrowserRouter([
  {
  path:"/",
  element:<Root/>,
  errorElement:<NotFound/>,
  children:[
    {
      index: true,element:<Home/>,
      errorElement:<NotFound/>,
    },
    {
      path:"/shop",
      element:<Shop/>
    },
    {
      path:'/faq',
      element:<Faq/>
    },
    {
      path:'/aboutus',
      element:<Aboutus/>
    },
    {
      path:'/contactus',
      element:<Contactus/>
    },
    {
      path:"/profile",
      element:<Profileroot/>,
      children:[
        {
          index:true,
          element:<ProfileDashboard/>    
      },
      {
         path:"/profile/OrderHistory",
         element:<ViewOrderDetails/>
      },
      {
        path:"/profile/editProfile",
        element:<EditProfile/>
      },
     
    ]
    },
    {
      path:"/AddTocart",
      element:<AddToCard/>
    },
    {
        path:"/Billing",
        element:<Billing/>
    },
    {
      path:"/projectDescription",
      element:<Productdes/>
    }
  ],
},
{
  path: '/login',
  element: <Login/>
},
{
  path:"/signin",
  element: <Signin/>
}

])


//queryclient
const queryClient =  new QueryClient()


//firebase notification
import { firebaseConfig } from './firebase/firebaseConfig';
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/firebaseConfig";
import { QueryClient } from 'react-query';

const { VITE_APP_VAPID_KEY } = import.meta.env;

function App() {
//   const arrayOfObjects = [
//     { name: "John", age: 30, city: "New York" },
// ];

// return (
//   <>
//   {arrayOfObjects.map((e)=>{
//     return(
//       <>    
//       <AboutuslogoGrid img={Feature} title={null} description='100% healthy & Fresh food'/>
//     </>
//     )
//   })}
//   </>
// )
  // return (
  //  <Profileroot/>
  // )
  const state = useSelector((state) => state.userData)
  const dispatch = useDispatch()
  console.log(state, "my sataet")
  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();
    console.log(permission, "my permise")
    if (permission === "granted") {
      try {
        console.log(messaging, "message details")
        const token = await getToken(messaging, {
          vapidKey: VITE_APP_VAPID_KEY,
        });  
        console.log("Token generated : ", token);  
        dispatch(addToken(token))    
      } catch (error) {
        console.warn(error)
      }


      //We can send token to server
      
    } else if (permission === "denied") {
      //notifications are blocked
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  onMessage(messaging, (payload) => {
    toast(<Message notification={payload.notification} />);
  });


  return (
    <>    
      {/* <TeamCarouselMolecule/>
      <ClientTestimonalMolecule/> */}
     
    
    
    <RouterProvider router={Router}/>
  
    </>

  )
}

export default App
