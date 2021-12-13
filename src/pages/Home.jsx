import React from 'react'
import Navbar from '../component/Navbar'
import Annoucement from '../component/Annoucement'
import Slider from '../component/Slider'
import Product_list from '../component/Product_list'
import Blog from '../component/Blog'
import Footer from '../component/Footer'
import LoginForm from './SignInForm/SignInForm'


const Home = () => {
    return (
        <div className="container">
            <Annoucement/>
            <Navbar/>
            <Slider/>
            <Product_list/>
            <Blog/>
            <Footer/>
        </div>
       
    )
}

export default Home