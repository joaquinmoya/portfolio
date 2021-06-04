import React from 'react';
import styled, { keyframes} from 'styled-components';
import fotoYo from '../img/yo1.png';

const MainHome = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px 50px;
    font-family: 'Roboto Mono', monospace;
    color: #e9ecef;
    background-color: #212529;
    

    @media (min-width: 768px) {
        
            grid-template-columns: repeat(2,1fr);
            padding: 60px 100px;
            height: 100vh;
     }

     @media (max-width: 350px) {
        padding: 5px 20px;      
 }

`;
const hello = keyframes`
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }  
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }  
    100% { transform: rotate( 0.0deg) }

`;

const Hand = styled.div`
width: 30px;
animation-name: ${hello};  
animation-duration: 2.5s;       
animation-iteration-count: infinite;  
transform-origin: 70% 70%;      
display: inline-block;`;

const Img = styled.img`
    border-radius:40%;
    width: 100%;
    max-width: 400px;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    @media (max-width: 768px) {
        margin-bottom:2rem;
    }

    @media (max-width: 450px) {
        max-width:250px;
    }
    `   ;

const P = styled.p`
    font-size: 1.5rem;
    padding:2rem 0;
    width: fit-content;
    
    &:last-of-type{
        padding-bottom:1rem;
        border-bottom:3px solid #6c757d;
    }
`;

const H1 = styled.h1`font-size: 4rem;`;

const PersonalInfoContainer = styled.div`
    display: flex;
    justify-content: center; 
    flex-direction: column;
`;

const IconsContainer = styled.div`
    padding:1rem 0;
    display: flex;
    align-items: center;
    font-size: 30px;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;        
    align-items: center;
`;

const A = styled.a`
    color: #e9ecef;
    text-decoration:none;
    padding:1rem;
`;



const Home = () => {
    return(
    <MainHome>
        <PersonalInfoContainer>
        <P>Hi, my name is</P>
        <H1>Joaquin Moya <Hand>&#128075;</Hand></H1>
        <P> Full Stack Web Developer</P>
            <IconsContainer >
                <A href="https://www.linkedin.com/in/joaquin-moya/" target="_blank" className="fa fa-linkedin"></A>
                <A href="https://github.com/joaquinmoya" target="_blank" className="fa fa-github"></A>
                <A href="https://www.facebook.com/joaquinmoyavargas/" target="_blank" className="fa fa-facebook"></A>
                <A href="https://twitter.com/joaquinmoya97" target="_blank" className="fa fa-twitter"></A>   
                <A href="https://www.instagram.com/joaquinmoya08/" target="_blank" className="fa fa-instagram"></A>
                
            </IconsContainer>
        </PersonalInfoContainer>
            
        <ImageContainer>
            <Img src={fotoYo} alt='foto de joaquin moya'/>
        </ImageContainer>

    </MainHome>  
    )
}

export default Home;