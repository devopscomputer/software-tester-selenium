import React from 'react';
import '../assets/styles/BackgroundPanel.scss';

const BackgroundPanel = ({ children }) => {
    return (
        <div className="background-panel">
            {children}
        </div>
    );
};

export default BackgroundPanel;