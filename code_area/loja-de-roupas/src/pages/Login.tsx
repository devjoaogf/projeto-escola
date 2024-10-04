// Login.tsx
//Feito com o CHATGPT
/* eslint-disable */

'use client';

import React, { useState } from 'react';
import Menu from "@/components/Menu";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import AlternativeButton from "@/components/Buttons/AlternativeButton";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica de autenticação aqui
        console.log("Email:", email);
        console.log("Senha:", password);
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Menu />
            <div className="flex flex-col items-center justify-center flex-1">
                <h1 className="text-black-500 text-4xl font-bold mb-5">Login</h1>
                <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md w-80">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Digite seu email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Digite sua senha"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <PrimaryButton text="Entrar" type="submit" />
                        <AlternativeButton text="Cadastrar" type="button" onclick={() => alert("Redirecionar para cadastrar")} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
