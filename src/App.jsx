import React from "react";
import {createGlobalStyle} from "styled-components";
import Navegaçao from "./components/Navegaçao.jsx";


const GlobalStyled = createGlobalStyle `
*{
    margin:0;
    padding:0;
    box-sizing: borde-box;
    font-family: "Rubik Scribble, system-ui;
}
`


function  App (){
    return (
        <>
<GlobalStyled/>
<Navegaçao/>






        </>


    )
}
 export default App