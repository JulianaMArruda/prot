import styled from "styled-components";

//--navegação

export const Nav = styled.nav `
background-color:black;
font-family: Rubik Scribble, system-ui 2rem;

background-image: url(https://img.freepik.com/premium-photo/cosmic-gaze-surreal-work-art-that-combines-detailed-human-eye-with-mystical-beauty_607202-14344.jpg)

`

export const Ul= styled.ul `
height:20vh;
display:flex;
justify-content:space-evenly;
align-items:center;
list-style: none;


a{
    font-size: 1.5rem;
    text-decoration:none;
    color:paleturquoise;
}

a:hover{
    color:purple;
    font-family: Rubik Scribble, system-ui 2rem;
}

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: 50vh;
    border: solid pink;

    a{
        font-family: Rubik Scribble, system-ui 2rem;
    }
}
`
export const SectionInicio = styled.section`
height:80vh;
display:flex;
justify-content: space-evenly;
align-items: center;

background-color:black;

img{
    border-radius: 50%;
}
h2{
    color:purple;
}
@media(min-width: 320px) and (max-width: 768px){
border: solid purple; 
display: flex;
flex-direction: column;   

img{
    width: 50vw;
}

}


`

export const ContainerDivs = styled.section `
display: flex;
flex-direction:column;
justify-content: space-evenly;
height:40vh;

@media(min-width: 320px) and (max-width: 768px){

h2{
    text-align: center;
    font-family: Rubik Scribble, system-ui 2rem;
}

    img{
        width: 20vw;
    }
}

`

 export const Estudos = styled.section `
 width:30vw;
 height:50vh;
 display:flex;
 justify-content:space-evenly;
 align-items:center;
 flex-direction:column;
 border:solid goldenrod;
 `
 export const Habilidades = styled.section`
width: 30vw;
border: solid goldenrod;
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: center;


div{
    display: flex;
    align-items: center;
}

img{
    width: 10vw;
    height: 8vh;
}
`

export const Profissional = styled.section`
width: 30vw;
border: solid red;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
background-image: url(https://img.olhardigital.com.br/wp-content/uploads/2020/12/iStock-1163061277-min.jpg);
background-size:cover ;

div{
    display: flex;
    align-items: center;
}


h2{
    text-align: center;
}

`

export const BoxInicio = styled.div `
display:flex;
flex-direction:column;
justify-content: space-evenly;
align-items:center;

`


export const BoxInicio2 = styled.div `
display:flex;
justify-content:space-evenly;


`

export const Sobre = styled.main `
width:30vw;

border:solid purple;
display:flex;
justify-content: space-evenly;


`