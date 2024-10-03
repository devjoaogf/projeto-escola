//Use client pra rodar localmente o que ele não conseguir rodar no navegador e carregar a página
'use client'

import { ReactElement } from "react";

//Props do botão, define as propiedades; Props servem para reutilizarmos o mesmo botao só que com funções diferentes
type TextButton = {
    text?:string;
    icon?:ReactElement;
    type?:'button' | 'submit' | 'reset';
    onclick?:()=> void;
}
//Dentro da className, tem uma prop chamada "hover" que serve para mostrar uma sombra quando passar o crusor do mouse por cima do botão

export default function PrimaryButton ({text, icon,type='button',onclick}:TextButton){
    //Não esquecer de alterar a cor violet pela nossa cor
    
    //Alterar a cor do hover para outra cor além do roxo

    //Botão CONTA que aparece na primeira página
    return(
    <button 
    type={type}
    onClick={onclick}
    className="bg-black border-2 border-black text-white px-5 py-2 rounded-full flex justify-center hover:bg-gray-600 hover:text-black  transition ease-in-out duration-150"
        




        
    >
       
        {text && <span className="mr-2">{text}</span> }
        {icon}
    </button>
    ) //spann microajustes no texto dps de clicar
}
