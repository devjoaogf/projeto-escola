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


export default function ThirdButton ({text, icon,type='button',onclick}:TextButton){
    //Não esquecer de alterar a cor violet pela nossa cor
    
    //Alterar a cor do hover para outra cor além do roxo

    //Botões LOJA e SOBRE que aparecem na primeira página
    return(
    <button 
    type={type}
    onClick={onclick}
    className="text-black px-5 py-2 rounded-full flex justify-center hover:bg-violet-100 hover:transition ease-in-out delay-100"

        
    >
       
        {text && <span className="mr-2">{text}</span> }
        {icon}
    </button>
    ) //spann microajustes no texto dps de clicar
}
