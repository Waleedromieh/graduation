import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Layout from './Components/Layout/Layout'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Profile from './Components/Profile/Profile'
import Products from './Components/Products/Products'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Cart from './Components/Cart/Cart'
import CheckoutPage from './Components/Checkout/Checkout'
import ProfilePage from './Components/Profile/Profile'

import NotFound from './Components/NotFound/NotFound'
import WishlistPage from './Components/Wishlist/Wishlist'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import ProductsDetail from './Components/ProductsDetail/ProductsDetail'

function App() {
  let x=createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {path:'/',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'services',element:<Services/>},
      {path:'contact',element:<Contact/>},
      {path:'profile',element:<Profile/>},
      {path:'products',element:<Products/>},
      {path:'register',element:<Register/>},
      {path:'login',element:<Login/>},
      {path:'Profile',element:<ProfilePage/>},
      {path:'checkout',element:<CheckoutPage/>},
      {path:'productDetails',element:<ProductsDetail/>},
      {path:'cart',element:<Cart/>},
      {path:'wishlist',element:<WishlistPage/>},
      {path:'forgetpassword',element:<ForgetPassword/>},
      {path:'*',element:<NotFound/>},
    ]}
  ])
  return (
    <>
<RouterProvider router={x}></RouterProvider>
    </>
  )
}
export default App