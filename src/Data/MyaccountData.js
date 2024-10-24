import Dashboard from '../assets/myaccount/dashboard 2.svg'
import Logout from '../assets/myaccount/Logout.svg'
import orderHistory from '../assets/myaccount/orderHistory.svg'
import settings from '../assets/myaccount/settings.svg'
import shopping from '../assets/myaccount/shoppingCart.svg'
import wishlist from '../assets/myaccount/wishlist.svg'

import RedCap from '../assets/myaccount/RedCap.jpg'
import Mango from '../assets/myaccount/Mango.png'
import GreenCap from '../assets/myaccount/GreenCap.jpg'


const AccountDrawer = [
    {
        id:1,
        name:'Dashboard',
        Icon:Dashboard,
        link:'/profile'
    },
    {
        id:2,
        name:'Order History',
        Icon:orderHistory,
        link:'/profile/OrderHistory'
    },
    {
        id:3,
        name:'Wishlist',
        Icon:wishlist,
        link:"/profile"
    },
    {
        id:4,
        name:'Shopping Cart',
        Icon:shopping,
        link:"/profile"
    },
    {
        id:5,
        name:'Settings',
        Icon:settings,
        link:"/profile/EditProfile"
    },
    {
        id:6,
        name:'Log-out',
        Icon:Logout
    }
]



//sale history Table
export const Sale = [
    {
        id: 1,
        name: "Red Capsicum",
        image: RedCap,
        price: "14.99",
        price1:"16.99",
        ratings: 4.5
    },
    {
        id: 2,
        name: "Mango",
        image: Mango,
        price: "10.99",
        price1:"15.99",
        ratings: 3.0
    },
    {
        id: 3,
        name: "Green Capsicum",
        image: GreenCap,
        price: "14.99",
        price1:"16.99",
        ratings:3.5
},

];

export {
    AccountDrawer
}
