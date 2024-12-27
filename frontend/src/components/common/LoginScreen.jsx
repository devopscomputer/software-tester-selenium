import React, { useState } from 'react';
import '../../assets/styles/LoginScreen.scss';
import logo from '../../assets/images/logo1.png'; // Ajuste o caminho conforme necessário
import assinatura from '../../assets/images/assinatura.png'; // Importe a imagem da assinatura

const LoginScreen = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'Paulo' && password === '1993') {
            onLogin(); // Chama a função passada como prop
        } else {
            alert('Usuário ou senha incorretos.'); // Mensagem de erro
        }
    };

    return (
        <div className="login-screen">
            <div className="login-card">
                <img src={logo} alt="Logo1" className="logo1" />
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Digite seu username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Atualiza o estado do username
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
                    />
                </div>
                <a href="#" className="forgot-password">Esqueci minha senha</a>
                <button type="button" onClick={handleLogin}>Logar</button> {/* Chama a função de login */}
                 </div>
        </div>
    );
};

export default LoginScreen;