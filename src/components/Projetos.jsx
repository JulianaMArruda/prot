import React from "react";





function Projetos (){

    const desafios = [
       
        {imagem: "" , titulo: "" , link: "", descrição: ""},
    ]   {imagem: "" , titulo: "" , link: "", descrição: ""},
        {imagem: "" , titulo: "" , link: "", descrição: ""},




    return(
        <>
{desafios.map((item)=>(
    <div>
        < a href={item. link} target=" " img src={item.imagem} alt="" />
        <h2>{item.descrição}</h2>
    </div>
))}

        </>
    )
}
export default Projetos