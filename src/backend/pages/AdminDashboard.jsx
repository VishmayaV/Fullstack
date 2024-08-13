
import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';

const AdminDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <main style={{ padding: '2rem' }}>
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
