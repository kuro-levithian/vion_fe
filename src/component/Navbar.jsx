import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from '@mui/material';



const Container = styled.div`
heigth:60px;
background-color:green;
`;

const Wrapper = styled.div`
padding: 0px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const SearchContainer =styled.div`
border : 0.5px solid lightgray;
display:flex;
align-items: center;
margin-left: 25px;
padding: 5px;
border-radius:5px;
`;

const Input =styled.input`
border:none;
width:100%;
box-sizing: border-box;
background-color:transparent;
color:white;
font-size:14px;
::placeholder{
color: white;
};
`;
const Left =styled.div`
flex:1;
`;

const Center =styled.div`
flex:1;
`;

const Logo =styled.h1`
font-weight:bold;
color:White;
text-align:center
`;


const Right =styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content:space-evenly;
`;

const MenuItem  = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 15px;
padding:5px;
color:white;
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper> 
                <Left>
                    <a href="/"><Logo>VionMart</Logo></a>
                </Left>
                <Center>
                    <SearchContainer>
                        <SearchIcon style ={{color:"white",fontsize:14}}/>
                        <Input placeholder="Search"/>
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem><a href="/signup" style={{color:"white"}}>Register</a></MenuItem>
                    <MenuItem><a href="/login" style={{color:"white"}}>Login</a></MenuItem>
                    <MenuItem>
                        <a href="/cart">
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon style={{color:"white"}}/>
                            </Badge>
                        </a>
                    </MenuItem>
                </Right>
           </Wrapper> 
        </Container>
    )
}

export default Navbar