import React from 'react'
import styled from 'styled-components'
import logo1 from '../images/blog-1.jpg'
import logo2 from '../images/blog-2.jpg'
import logo3 from '../images/blog-3.jpg'

const Container = styled.div`
text-align:center;
`
const Title = styled.h1`
background-color:green;
color:white;
`

const Box_container = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(26rem,1fr));
gap:30px;
`

const Wrapper = styled.div`
overflow:hidden;
border-radius:.5rem;
box-shadow:0 .5rem 1.5rem rgba(0,0,0,.1);
background:#fff;
text-align:center;
`

const Stream = styled.img`
height:25rem;
width:100%;
object-fit:cover;
`

const Content = styled.div`
padding:2rem;
`

const Date = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding-bottom:1.5rem;
margin-bottom:1rem;
border-bottom:.2rem solid rgba(0,0,0,.1);
`
const Livestream_date = styled.h3`
color:#666;
padding:.5rem;
font-size:1.54rem;
&:hover{
    color:#ff7800;
}
`

const LiveStream_title = styled.h3`
line-height:1.8;
color:#666;
font-size:2.2rem;
padding:0.5rem 0;
`

const Desc = styled.p``

const Button = styled.button`
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

const Blog = () => {
    return (
        <Container>
            <Title>Live Stream</Title>
            <Box_container>
                <Wrapper>
                    <Stream src={logo1}/>
                    <Content>
                        <Date>
                            <Livestream_date>Live stream in 10/12/2021</Livestream_date>
                        </Date>
                        <LiveStream_title>Product Introduction</LiveStream_title>
                        <Desc>New product introduction</Desc>
                    </Content>
                    <Button>Explore</Button>
                </Wrapper> 

                <Wrapper>
                    <Stream src={logo2}/>
                    <Content>
                        <Date>
                            <Livestream_date>Live stream in 10/12/2021</Livestream_date>
                        </Date>
                        <LiveStream_title>Product Introduction</LiveStream_title>
                        <Desc>New product introduction</Desc>
                    </Content>
                    <Button>Explore</Button>
                </Wrapper> 

                <Wrapper>
                    <Stream src={logo3}/>
                    <Content>
                        <Date>
                            <Livestream_date>Live stream in 10/12/2021</Livestream_date>
                        </Date>
                        <LiveStream_title>Product Introduction</LiveStream_title>
                        <Desc>New product introduction</Desc>
                    </Content>
                    <Button>Explore</Button>
                </Wrapper> 

            </Box_container>
        </Container>
    )
}

export default Blog
