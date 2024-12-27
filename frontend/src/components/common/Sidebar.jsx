import React from "react";
import "../../assets/styles/Sidebar.scss";
import { FaHome, FaTasks, FaChartBar, FaCog, FaFileAlt } from "react-icons/fa";

// Importando a imagem da logo
import logo from "../../assets/images/logo1.png"; // Caminho relativo da imagem


const Sidebar = ({ onSelect }) => {
    const menuItems = [
        { label: "Dashboard", icon: <FaHome />, value: null },
        { label: "Testes Funcionais", icon: <FaTasks />, value: 'funcionais' },
        { label: "Testes de Regressão", icon: <FaTasks />, value: 'regressao' },
        { label: "Testes Mobile", icon: <FaChartBar />, value: 'mobile' },
        { label: "Testes de UI", icon: <FaChartBar />, value: 'ui' },
        { label: "Testes de API", icon: <FaChartBar />, value: 'api' },
        { label: "Testes E2E", icon: <FaChartBar />, value: 'e2e' },
        { label: "Testes de Integração", icon: <FaChartBar />, value: 'integracao' },
        { label: "Testes Baseados em Dados", icon: <FaChartBar />, value: 'base_dados' },
        { label: "Testes de Performance", icon: <FaChartBar />, value: 'performance' },
        { label: "Testes de Compatibilidade", icon: <FaChartBar />, value: 'compatibilidade' },
        { label: "Testes de Acessibilidade", icon: <FaChartBar />, value: 'acessibilidade' },
        { label: "Testes de Segurança", icon: <FaChartBar />, value: 'seguranca' },
        { label: "Testes Exploratórios", icon: <FaChartBar />, value: 'exploratorios' },
        { label: "Testes Cross-Browser", icon: <FaChartBar />, value: 'cross_browser' },
        { label: "Testes de Atualização", icon: <FaChartBar />, value: 'atualizacao' },
        { label: "Configurações", icon: <FaCog />, value: 'configuracoes' },
        { label: "Relatórios", icon: <FaFileAlt />, value: 'relatorios' },
    ];

    const handleSelect = (testType) => {
        console.log("Selecionado:", testType); // Log para verificar a seleção
        onSelect(testType);
    };

    return (
        <div className="sidebar">
            <img src={logo} alt="Logo" className="sidebar-logo" />
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} onClick={() => handleSelect(item.value)}> {/* Chama handleSelect */}
                        <a href={`#${item.label.toLowerCase().replace(/\s/g, '-')}`}>
                            {item.icon} <span>{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;