import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #343a40;
    font-family: 'Roboto Mono', monospace;
`;
const Nav = styled.nav`
    display: flex;
    justify-content:flex-end;
`;

const LinkStyled = styled(Link)`
    position: relative;
    text-decoration: none;
    color: #e9ecef;
    transition: all 2s;
    display: block;
    padding: 15px;
    text-decoration: none;
    color: #aaa;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 10px;
    &:before{
        transition: all .5s;
    }
    &:after{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: '.';
        color: transparent;
        background: #aaa;
        height: 1px;
        text-align: left;
        content: '.';
        margin: 0;
        opacity: 0;
        transition: all .5s;
    }
    &:hover:after{
        width:100%;
        z-index: -10;
        animation: fill 1s forwards;
        -webkit-animation: fill 1s forwards;
        -moz-animation: fill 1s forwards;
        opacity: 1;
    }

    &:hover{
        z-index: 1;
        color: #fff;
    }

`;
const Header = () => {
    return(
        <HeaderContainer>
            <Nav>
                <LinkStyled to={'/'}>Home</LinkStyled>
                <LinkStyled to={'/about'} >About</LinkStyled>
                <LinkStyled to={'/projects'} >Projects</LinkStyled>
            </Nav>
        </HeaderContainer>
    )
}

export default Header;