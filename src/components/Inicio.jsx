import React from "react";
import Perfil from "./Imagens/ju.jpeg"
import Linked from "./Imagens/link.png"
import Git from "./Imagens/git.jpg"
import * as S from "./Style.jsx";

function Inicio() {
    return (

        <S.SectionInicio>
            <img src={Perfil} alt="foto perfil"width="300pix" />
              
            <S.ContainerDivs>

                <S.BoxInicio>
                    <h2>Sou a Juliana futura Dev.</h2>
                </S.BoxInicio>

                <S.BoxInicio2>
                    <img src={Linked} alt="linked" width="40pix" />
                    <img src={Git} alt="github"  width="40pix" />
                </S.BoxInicio2>

            </S.ContainerDivs>

        </S.SectionInicio>
    )
}
export default Inicio