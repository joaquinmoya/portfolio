import React from 'react';
import styled from 'styled-components';

const MainProjects = styled.main`
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
padding: 0.5rem;

@media (max-width: 768px) {
    font-size: 3rem;
    
}

`;

const ProjectsContainer = styled.ul`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    padding: 2rem 0.5rem ;
    margin:0px;

    @media (max-width: 350px) {
        padding: 0px;    
 }
`;
const H3 = styled.h3`
font-size: 3rem;
border-bottom: 3px dashed #6c757d;
padding:0.5rem;

@media (max-width: 768px) {
    font-size: 2rem;
    
}
`;

const Li = styled.li`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
width:300px;
height:200px;
margin:1rem;
list-style:none;
border-radius:30px;
font-size:1.5rem;
-webkit-box-shadow: 0 10px 6px -6px rgba(0,0,0,0.2);
-moz-box-shadow: 0 10px 6px -6px rgba(0,0,0,0.2);
box-shadow: 0 10px 6px -6px rgba(0,0,0,0.2);
background-position:center;
background-size: 300px auto;
background-repeat: no-repeat;
position: relative;

@media (max-width: 350px) {
    width:250px;
    height:150px;
    font-size:1rem;
}
`;

const Img = styled.img`
    width: 100%;
    max-width: 70px;
    height: auto;
    padding-bottom:1rem;
    
    @media(max-width: 350px) {
        padding:0.5rem;
    }
    `;

const H4 = styled.h4`
    font-size: 1.5rem;
    padding:0.6rem;
    weight:700;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.8);
    @media (max-width: 350px) {
        font-size:1rem;
        padding:0.5rem;
    }
`;

const BackgroundImage = styled.div`
    transition: .45s ease-in-out;
    border-radius:30px;
    width: 100%;
    height: 100%;            
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0; 
    display:flex;
    align-items:center;
    justify-content:center;

    &:hover{
        opacity:1;
    }

   
`;
const TextProject = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
     z-index:999;
     
`;

const A = styled.a`
    text-decoration:none;
    color:inherit;
    width:50px
    height:30px;
    font-size:0.8rem;
    padding:0.5rem;
    border:2px solid #f8f9fa;
    border-radius: 20px;
    transition: background-color 0.3s ease;
    -webkit-transition: background-color 0.5s ease;
    

    &:hover{
        background-color: rgba(0,0,0,0.3);
    }
    @media (max-width: 350px) {
        font-size:0.5rem;
        padding:0.5rem;
    }
`;

const Projects = () => {
    return(
        <MainProjects>
            <H2 style={{marginBottom:"3rem"}}>Projects</H2>
            <H3>Freelance Projects</H3>
            <ProjectsContainer>
                <Li style={{backgroundImage:"url('/img/mision.jpeg')"}}>
                    <BackgroundImage style={{backgroundColor:"rgba(4,67,148,0.8)"}}>
                    <TextProject>
                        <H4>Joel</H4>
                        <Img src='/img/logo_joel.png'/>
                        <A href="https://joel.com.ar/" target="_blank">Visit website &#9656;</A>
                    </TextProject>        
                    </BackgroundImage>          
                </Li>
                <Li style={{backgroundImage:"url('/img/trabajador.jpg')"}}>
                <BackgroundImage style={{backgroundColor:"rgba(213,176,139,0.85)"}}>
                <TextProject style={{gap:"15px"}}>
                        <H4>Carpsa</H4>
                        <Img style={{maxWidth:"150px"}} src='/img/logo_carpsa.png'/>
                        <A href="https://carpsamaderas.com.ar/" target="_blank">Visit website &#9656;</A>
                    </TextProject>  
                </BackgroundImage>        
                </Li>
            </ProjectsContainer>
            <H3>Side Projects</H3>
            <ProjectsContainer>
                <Li style={{backgroundImage:"url('/img/bebidas.png')"}}>
                    <BackgroundImage style={{backgroundColor:"rgba(33,37,41,0.7)"}}>
                        <TextProject>
                            <H4>Bebidas</H4>
                            <A href="https://github.com/joaquinmoya/recetas_tragos" target="_blank">Github repository &#9656;</A>
                        </TextProject>        
                    </BackgroundImage> 
                </Li>
                <Li style={{backgroundImage:"url('/img/letras.png')"}}>
                    <BackgroundImage style={{backgroundColor:"rgba(33,37,41,0.7)"}}>
                        <TextProject>
                            <H4>Letras</H4>
                            <A href="https://github.com/joaquinmoya/letras" target="_blank">Github repository &#9656;</A>
                        </TextProject>        
                    </BackgroundImage> 
                </Li>
                <Li style={{backgroundImage:"url('/img/noticias.png')"}}>
                    <BackgroundImage style={{backgroundColor:"rgba(33,37,41,0.7)"}}>
                        <TextProject>
                            <H4>Noticias</H4>
                            <A href="https://github.com/joaquinmoya/noticias" target="_blank">Github repository &#9656;</A>
                        </TextProject>        
                    </BackgroundImage> 
                </Li>
                <Li style={{backgroundImage:"url('/img/buscadorImagenes.png')"}}>
                    <BackgroundImage style={{backgroundColor:"rgba(33,37,41,0.7)"}}>
                        <TextProject>
                            <H4>Buscador Imagenes</H4>
                            <A href="https://github.com/joaquinmoya/pixabay" target="_blank">Github repository &#9656;</A>
                        </TextProject>        
                    </BackgroundImage> 
                </Li>
                <Li style={{backgroundImage:"url('/img/mern.png')"}}>
                    <BackgroundImage style={{backgroundColor:"rgba(33,37,41,0.7)"}}>
                        <TextProject>
                            <H4>Administrador de Proyectos</H4>
                            <A href="https://github.com/joaquinmoya/administrador_de_proyectos" target="_blank">Github repository &#9656;</A>
                        </TextProject>        
                    </BackgroundImage> 
                </Li>
                <Li style={{backgroundImage:"url('/img/crud.png')"}}>
                    <BackgroundImage style={{backgroundColor:"rgba(33,37,41,0.7)"}}>
                        <TextProject>
                            <H4>Listado de Productos</H4>
                            <A href="https://github.com/joaquinmoya/crud_redux" target="_blank">Github repository &#9656;</A>
                        </TextProject>        
                    </BackgroundImage> 
                </Li>
                <Li style={{backgroundImage:"url('/img/producthunt.png')"}}>
                    <BackgroundImage style={{backgroundColor:"rgba(33,37,41,0.7)"}}>
                        <TextProject>
                            <H4>Imitación Product Hunt</H4>
                            <A href="https://github.com/joaquinmoya/product_hunt_next" target="_blank">Github repository &#9656;</A>
                        </TextProject>        
                    </BackgroundImage> 
                </Li>
                <Li style={{backgroundImage:"url('/img/hotelgatsby.png')"}}>
                    <BackgroundImage style={{backgroundColor:"rgba(33,37,41,0.7)"}}>
                        <TextProject>
                            <H4>Hotel Gatsby</H4>
                            <A href="https://github.com/joaquinmoya/hotel_gatsby" target="_blank">Github repository &#9656;</A>
                        </TextProject>        
                    </BackgroundImage> 
                </Li>
            </ProjectsContainer>


            
        </MainProjects>
    )
}

export default Projects;