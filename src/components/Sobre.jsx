import React from "react";
import Vai from "./Imagens/web.png"
import Css from "./Imagens/css.png"
import Java from "./Imagens/jv.png"
import Html from "./Imagens/html.png"
import Halo from "./Imagens/halo.jpg"
import * as S from "./Style.jsx"


function Sobre() {
    return (
        <S.Sobre>
            <S.Estudos>
                <h2>ESTUDOS</h2>

                <div>
                    <h2>Desenvolvimento Front-End</h2>
                    <h3>Ago/2023 - Maio/2024</h3>

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
                    <img src={Halo} alt="capa do livro" />

                </div>


            </S.Profissional>

        </S.Sobre>


    )
}
export default Sobre