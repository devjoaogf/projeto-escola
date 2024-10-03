//Criei esse tsx porque irei exibir o menu sempre e assim consigo ter mais facilidade e reaproveitamento de código

//use cliente para rodar localmente os arquivos ao inves do servidor porque está dando erro
'use client'

//Faço import das coisas que irei usar de outros arquivos
import PrimaryButton from "@/components/Buttons/PrimaryButton";


import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import Logo from "@/assets/IMG-20240918-WA0045.jpg";
import SecondButton from "./Buttons/SecondButton";

import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import ThirdButton from "./Buttons/ThirdButton";
import { Button } from "@mui/material";
import { useState } from "react";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import HamburguerButton from "./Buttons/HamburguerButton";

export default function Menu() {
    const [exibirMenu, setExibirMenu] = useState<boolean>(false)

    function verificarMenu() {
        if (exibirMenu) {
            setExibirMenu(false)
        } else {
            setExibirMenu(true)
        }

    }

    return (
        //1a div define props para o menu superior; 

        //2div alinha o botao conta na direita e define algumas props dele no menu superior; MAIS IMPORTANTE: a prop "lg:px-40" é o que da a adptabilidade de visualização; lg-40 é para exibir 40px de espaçamento quando tiver no computador, os outros 10 vão ser no celular


        <div className="w-full h-20 bg-white shadow-md">

            <div className="px-10 w-full h-full m-auto flex justify-between items-center lg:px-40">
                <img className="w-20" src={Logo.src} alt="" />

                <div className=" hidden lg:flex items-center gap-4" >

                    <ThirdButton
                        text="Sobre"
                    />
                    <ThirdButton
                        text="Loja"
                    />

                    <SecondButton
                        text="Cadastrar Produto"
                        icon={<ControlPointOutlinedIcon />}

                    />


                    <PrimaryButton
                        text="Conta"
                        icon={<AccountCircleOutlinedIcon />}
                        type="button"
                        onclick={() => alert("Clicou na conta")}
                    />
                </div>
                <div className="flex lg:hidden">
                    <Button
                        onClick={verificarMenu}>
                        {
                            exibirMenu ? (
                                <HighlightOffRoundedIcon />
                            ) : (
                                <HamburguerButton />

                            )
                        }

                    </Button>
                </div>
            </div>

            
            {exibirMenu && (
            <div className="bg-white w-full h[100vh-80px] fixed top-20 ">
                <div className="flex flex-col gap-2 px-10">
                <ThirdButton
                    text="Sobre"
                    />
                    <ThirdButton
                    text="Loja"
                    />
                    
                    <SecondButton
                    text="Cadastrar Produto"
                    icon={<ControlPointOutlinedIcon/>}
                    
                    />
                

                    <PrimaryButton
                        text="Conta"
                        icon={<AccountCircleOutlinedIcon />}
                        type="button"
                        onclick={() => alert("Clicou na conta")}
                    />     
                </div>
            </div>
            )}
        </div>

    )
}
