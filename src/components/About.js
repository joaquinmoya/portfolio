import React from 'react';
import styled from 'styled-components';

const MainAbout = styled.main`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 20px 50px;
    font-family: 'Roboto Mono', monospace;
    color: #e9ecef;
    background-color: #212529;
    height: 100%;
    text-align:center;

    @media (min-width: 768px) {
            padding: 60px 100px;  
     }

     @media (max-width: 350px) {
        padding: 5px 20px;      
 }
`;

const H2 = styled.h2`
font-size: 4rem;
border-bottom: 3px solid #6c757d;
width: fit-content;
`;

const P = styled.p`

    font-size: 1.5rem;
    padding:2rem 0;
    width: fit-content;
`;

const Ul = styled.ul`
display:flex;
flex-wrap:wrap;
justify-content:center;
padding:2rem;
margin:0px;

@media (max-width: 350px) {
    padding:0px;      
}
`;

const Li = styled.li`
display:flex;
justify-content:center;
align-items:center;
width:250px;
margin:1rem;
list-style:none;
height:100px;
border-radius:20px;
font-size:1.5rem;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const H3 = styled.h3`
font-size: 3rem;
border-bottom: 3px dashed #6c757d;
`;

const About = () => {
    return(
    <MainAbout>
    <H2>About me</H2>
    <P>I am <b>Full Stack Web Developer </b>based in Córdoba, Argentina &#127462;&#127479;. I describe myself as passionate about the web, focused on learning every day new skills and tools to improve the user experience and the performance of the websites.</P>
    <H3>Skills</H3>
    <Ul>
        <Li style={{backgroundColor:"rgb(220, 74, 37,0.5)"}}>HTML</Li>
        <Li style={{backgroundColor:"rgb(18,101,160,0.5)"}}>CSS</Li>
        <Li style={{backgroundColor:"rgb(239,216,29,0.5)"}}>Javascript </Li>
        <Li style={{backgroundColor:"rgb(120,216,246,0.5)"}}>React.js</Li>
        <Li style={{backgroundColor:"rgb(0,0,0,0.5)"}}>Next.js</Li>
        <Li style={{backgroundColor:"rgb(98,49,148,0.5)"}}>Gatsby</Li>
        <Li style={{backgroundColor:"rgb(74,174,78,0.5)"}}>Node JS</Li>
        <Li style={{backgroundColor:"rgb(49,100,140,0.5)"}}>PostgreSQL</Li>
        <Li style={{backgroundColor:"rgb(65,149,67,0.5)"}}>Mongo DB</Li>
    </Ul>
    </MainAbout>
    )
}

export default About;