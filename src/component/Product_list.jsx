import React from 'react'
import styled from "styled-components"
import logo from '../images/product_02.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Product } from '../data';


const Container = styled.div`
display:grid;
grid-template-columns:300px auto;
grid-gap: 50px;
padding: 10px;
`
const Section_Catalog = styled.div`
background-color: rgba(255, 255, 255, 0.8);
text-align: center;
`
const Menu = styled.ul`
display: grid;
padding: 0;
list-style: none;
font-size: 1.6rem;
border: 0.1rem  #EEE solid;
`
const Submenu = styled.ul`
list-style: none;
padding: 0;
position: absolute;
display:none;
`

const Category = styled.li`
display: flex;
padding: 8px 16px;
transition:.2s linear;
&:hover{
    background-color:#EEE;
    color: #F00000;
    ${Submenu}{
        display:block;
    }
}
position: relative;
`


const Menu_item = styled.li`
background-color:green;
color:white;
&:hover{
    background-color:orange;
}
`

const Section_Product = styled.div`
align-items:center;
text-align:center;
background-color: rgba(255, 255, 255, 0.8);
`

const Title = styled.h1`
font-weight:bold;
font-size: 30px;
background-color:green;
color:white;
`
const Product_slider = styled.div`
display:grid;
grid-template-columns:auto auto auto;
grid-gap:10px;
`

const Card = styled.div`
background: #fff;
border-radius:.5rem;
text-align:center;
padding:3rem 2rem;
outline-offset:-1rem;
outline:.1rem solid rgba(0,0,0,.1);
box-shadow:0 .5rem 1.5rem rgba(0,0,0,.1);
transition:.2s linear;
&:hover{
    outline-offset:0rem;
    outline:.2rem solid #130f40;
}
`

const Product_box = styled.div`
flex:1;
`

const Img = styled.img`
width:50%;
height:50%;
`

const Product_name = styled.h3`
font-size:2.5rem;
color: #130f40;
`

const Price = styled.span`
font-size:2rem;
color:#666;
padding:.5rem 0;
`

const Add_button = styled.button`
margin-top: 1rem;
display: inline-block;
padding:.8rem 3rem;
font-size: 1.7rem;
border-radius: .5rem;
border:.2rem solid #130f40;
color:#130f40;
cursor: pointer;
background: none;
&:hover{
    background: green;
    color:#fff;
}
`


const Product_list = () => {
    return (
        <Container>
           <Section_Catalog>
               <Title>Catalog</Title>
               <Menu>
                   <Category>Thịt, cá, hải sản
                       <Submenu>
                           <Menu_item>Thịt các loại</Menu_item>
                           <Menu_item>Thịt các loại</Menu_item>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                       </Submenu>
                   </Category>
                   <Category>Rau, củ, trái cây
                       <Submenu>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                       </Submenu>
                   </Category>
                   <Category>Đồ uống các loại
                       <Submenu>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                       </Submenu>
                   </Category>
                   <Category>Sữa uống các loại
                       <Submenu>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                       </Submenu>
                   </Category>
                   <Category>Bánh kẹo các loại
                       <Submenu>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                       </Submenu>
                   </Category>
                   <Category>Mì, cháo, phở, bún
                       <Submenu>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                       </Submenu>
                   </Category>
                   <Category>Dầu ăn, gia vị
                       <Submenu>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                       </Submenu>
                   </Category>
                   <Category>Gạo bột, đồ khô
                       <Submenu>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                       </Submenu>
                   </Category>
                   <Category>Đồ mát, đông lạnh
                       <Submenu>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                           <li>Thịt các loại</li>
                       </Submenu>
                   </Category>
               </Menu>
           </Section_Catalog>

           <Section_Product>
              <Title>New Product</Title>
              <Product_slider>
              {Product.map((item)=>(
                  <Card>
                    <a href="/product" style={{color:"white"}}>
                    <Product_box>
                        <Img src={item.img}/>
                        <Product_name>{item.title}</Product_name>
                        <Price>Price:{item.price}</Price>
                    </Product_box>
                    <Add_button>Add to cart</Add_button> 
                    </a>
                </Card>
              ))}
              </Product_slider>        
            </Section_Product>
        </Container>
    )
}

export default Product_list
