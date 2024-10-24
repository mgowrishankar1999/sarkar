import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './Redux/store/store.js';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();




// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={Router}/>
   
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
  <QueryClientProvider client={queryClient} >
  <Provider store={store}>
  <App />
  

  </Provider>

  </QueryClientProvider>

  </React.StrictMode>,
)
