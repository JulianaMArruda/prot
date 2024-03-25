import React from "react";
import Inicio from "./Inicio.jsx";
import Sobre from "./Sobre.jsx";
import Projetos from "./Projetos.jsx";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"; 




 function Navegaçao (){
    return(
        <BrowserRouter>
        <nav>
            <ul>

                <li><Link to="/">Inicio </Link></li>
                <li><Link to="/Sobre">Sobre</Link></li>
                <li><Link to="/Projetos">Projetos</Link></li>
            </ul>
        </nav>

        <Routes>

        <Route path="/" element={<Inicio/>}/>
        <Route path="Sobre" element={<Sobre/>}/>
        <Route path="Projetos" element={<Projetos/>}/>

        </Routes>
        
        </BrowserRouter>
    )
}
export default Navegaçao