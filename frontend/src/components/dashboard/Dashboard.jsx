import React from 'react';
import SummaryCards from '../components/dashboard/SummaryCards';
import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <SummaryCards />
        </div>
    );
};

export default Dashboard;
