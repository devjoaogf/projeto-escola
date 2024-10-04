// src/pages/CadastroProduto.tsx
/* eslint-disable */

'use client';

import React, { useState } from 'react';
import Menu from "@/components/Menu";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import AlternativeButton from "@/components/Buttons/AlternativeButton";

const CadastroProduto: React.FC = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [imagem, setImagem] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica para cadastrar o produto aqui
        console.log("Nome:", nome);
        console.log("Descrição:", descricao);
        console.log("Preço:", preco);
        console.log("Imagem:", imagem);
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Menu />
            <div className="flex flex-col items-center justify-center flex-1">
                <h1 className="text-black-500 text-4xl font-bold mb-5">Cadastrar Produto</h1>
                <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md w-80">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">Nome do Produto</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Digite o nome do produto"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descricao">Descrição</label>
                        <textarea
                            id="descricao"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Digite a descrição do produto"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preco">Preço</label>
                        <input
                            type="number"
                            id="preco"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Digite o preço do produto"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagem">Imagem</label>
                        <input
                            type="file"
                            id="imagem"
                            onChange={(e) => setImagem(e.target.files?.[0] || null)}
                            className="block w-full text-gray-700 border rounded py-2 px-3 focus:outline-none focus:shadow-outline"
                            accept="image/*"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <PrimaryButton text="Cadastrar" type="submit" />
                        <AlternativeButton text="Voltar" type="button" onclick={() => alert("Redirecionar para a tela anterior")} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastroProduto;
