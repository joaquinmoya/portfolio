import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.footer`
    text-align: center;
    background-color: #343a40;
    color: #6c757d;
    display: flex;
    justify-content: center;
    align-items: center;`;


const Footer = () =>{
    return(
        <FooterContainer>
            <p style={{padding:"1rem"}}>&copy; 2021 Joaquin Moya &#x1F4BB;. All rights reserved.</p>
        </FooterContainer>    
    )
}

export default Footer;