/* eslint-disable */

import AlternativeButton from "@/components/Buttons/AlternativeButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Menu from "@/components/Menu";
import Fundo from"@/assets/Vestido Melissa.jpg"


// Cada classname altera as props do menu principal
export default function Sobre(){

    return(
        <div>
            <Menu/>
            
            <div className="bg-gradient">
                <div className="flex flex-col flex-wrap items-center p-5 lg:px-40 lg:flex-row">
                    <div className="flex flex-col px-4 text-center mb-5 lg:w-1/2 gap-4 lg:text-left">
                        <p className="texto-sobre font-bold lg:text-2xl">Tudo que você procura</p>
                        <h1 className="text-white text-3xl font-bold lg:text-5xl">A maior loja de moda feminina do Brasil</h1>
                        <p className="texto-sobre font-bold lg:text-2xl">Produtos importados para você se vestir com elegância.</p>
                        <div className="flex flex-col gap-4 lg:flex-row">
                            <PrimaryButton
                            text="Ir para a loja"
                            />

                            <AlternativeButton
                            text="Ver carrinho"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-1/2">
                        <div className="border-8 border-imagem-500">
                           <img className="border-8 border-imagem-500" src={Fundo.src} alt="Vestido Ladie" />
                            </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

