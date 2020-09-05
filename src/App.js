import React from 'react';
import './App.css';
import Sidebar from './componetns/Sidebar/Sidebar';
import Dashboard from './componetns/Dashboard/Dashboard';
import Navbar from './componetns/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <div className="left-sidebar">
            <Sidebar />
          </div>
          <div className="right-dashboard">
            <Dashboard />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
