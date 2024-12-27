import React, { useState } from 'react';
import '../../assets/styles/test/MobileTest.scss';

const MobileTest = () => {
    const [url, setUrl] = useState('');
    const [emulator, setEmulator] = useState('');

    const handleTest = () => {
        console.log('Testando com URL:', url);
        console.log('Emulador:', emulator);
    };

    return (
        <div className="mobile-test">
            <h2>Management Selenium Tester </h2>
            <div className="input-group">
                <label htmlFor="url">URL do App:</label>
                <input
                    type="text"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Insira a URL do localhost"
                />
            </div>
            <div className="input-group">
                <label htmlFor="emulator">Emulador Android:</label>
                <input
                    type="text"
                    id="emulator"
                    value={emulator}
                    onChange={(e) => setEmulator(e.target.value)}
                    placeholder="Insira o nome do emulador"
                />
            </div>
            <button onClick={handleTest}>Testar</button>
            <div className="metrics-mobile">
                <h3>Metrics</h3>
                <button onClick={handleTest}>Relatório</button>
            </div>

        </div>
        
    );
};

export default MobileTest;