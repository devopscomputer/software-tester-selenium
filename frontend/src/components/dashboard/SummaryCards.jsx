import React from 'react';
import './SummaryCards.scss';

const SummaryCards = () => {
    const cards = [
        { title: "Total de Casos de Teste", value: 120 },
        { title: "Testes Pendentes", value: 30 },
        { title: "Testes em Execução", value: 10 },
        { title: "Última Execução", value: "20 minutos atrás" },
    ];

    return (
        <div className="summary-cards">
            {cards.map((card, index) => (
                <div key={index} className="card">
                    <h2>{card.value}</h2>
                    <p>{card.title}</p>
                </div>
            ))}
        </div>
    );
};

export default SummaryCards;
