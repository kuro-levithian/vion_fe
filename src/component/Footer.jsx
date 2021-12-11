import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import styled from 'styled-components'

const Container = styled.div`
background:#fff;
`

const Wrapper = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(25rem,1fr));
align-items:centerl;
`
const Icon_box = styled.div``

const Title = styled.h3`
font-size: 2.5rem;
color:black;
padding:0.5rem 0;
`

const Icon_desc = styled.p`
display: flex;
font-size: 1rem;
color:#666;
padding:0.5rem;
`

const Contact_box = styled.div``


const Contact_desc = styled.p`
display: flex;
font-size: 1rem;
color:#666;
padding:0.5rem;
`





const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Icon_box>
                    <Title>Contact via social network</Title>
                    <Icon_desc>Contact with us by these following social network</Icon_desc>
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/>
                </Icon_box>

                <Contact_box>
                    <Title>Contact information</Title>
                    <Contact_desc><LocalPhoneIcon/>123456789</Contact_desc>
                    <Contact_desc><EmailIcon/>abcxyz@gmail.com</Contact_desc>
                </Contact_box>
            </Wrapper>
        </Container>
    )
}

export default Footer
