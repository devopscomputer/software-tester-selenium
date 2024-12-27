import React, { useState } from 'react';
import Sidebar from './components/common/Sidebar';
import BackgroundPanel from './components/BackgroundPanel';
import MobileTest from './components/tests/MobileTest'; // Importe o MobileTest
import LoginScreen from './components/common/LoginScreen'; // Importa o LoginScreen
import './assets/styles/LoginScreen.scss';
import './assets/styles/global.scss';
import './assets/styles/BackgroundPanel.scss';
import './assets/styles/test/MobileTest.scss';
import './assets/styles/Sidebar.scss';

function App() {
    const [selectedTest, setSelectedTest] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controle de login

    const handleLogin = () => {
        setIsLoggedIn(true); // Atualiza o estado para indicar que o usuário está logado
    };

    const renderTestComponent = () => {
        switch (selectedTest) {
            case 'mobile':
                return <MobileTest />;
            case 'funcionais':
                return <FunctionalTests />;
            // Adicione outros casos conforme necessário
            default:
                return (
                    <main style={{ marginLeft: '260px', padding: '20px' }}>
                        <h1>Bem-vindo ao Software de Testes Automatizados</h1>
                    </main>
                );
        }
    };

    return (
        <div className="App">
            {!isLoggedIn ? ( // Verifica se o usuário está logado
                <LoginScreen onLogin={handleLogin} /> // Passa a função de login
            ) : (
                <>
                    <Sidebar onSelect={setSelectedTest} /> {/* Passa a função setSelectedTest */}
                    <BackgroundPanel>
                        {renderTestComponent()}
                    </BackgroundPanel>
                </>
            )}
        </div>
    );
}

export default App;