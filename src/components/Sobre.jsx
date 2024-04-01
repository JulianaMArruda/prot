import React from "react";
import Vai from "./Imagens/Web.png"
import Css from "./Imagens/css.png"
import Java from "./Imagens/jv.png"
import Html from "./Imagens/html.png"
import Lady from "./Imagens/Lady.jpeg"
import * as S from "./Style.jsx"
import * as Sobre1Jsx from "./Sobre.1.jsx";


function Sobre() {
    return (
        <Sobre1Jsx.Sobre>
            <S.Estudos>
                <h2>ESTUDOS</h2>

                <div>
                    <h2>Desenvolvimento Front-End</h2>
                    <h3>Sgo/2023 - Maio/2024</h3>

                </div>

                <img src={Vai} alt="logo " />

            </S.Estudos>

            <S.Habilidades>
                <h2>HABILIDADES</h2>
                <div>

                    <img src={Css} alt="logo " />
                    <h3>CSS</h3>

                </div>
                <div>

                    <img src={Java} alt="logo " />
                    <h3>Javascript</h3>

                </div>
                <div>

                    <img src={Html} alt="logo " />
                    <h3>HTML</h3>

                </div>

            </S.Habilidades>

            <S.Profissional>
                <h2>PROFISSIONAL</h2>
                <div>
                    <h2>Escritora</h2>
                    <img src={Lady} alt="capa do livro" />

                </div>


            </S.Profissional>

        </Sobre1Jsx.Sobre>


    )
}
export default Sobre