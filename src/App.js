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
import LoginForm from './pages/SignInForm/SignInForm'
import SignUpForm from './pages/SignUpForm/SignUpForm'


const App = () => {
  return( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element = {<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/register" element={<SignUpForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

