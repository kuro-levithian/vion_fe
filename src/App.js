import React from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'


const App = () => {
  return( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element = {<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

