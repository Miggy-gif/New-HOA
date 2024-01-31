// src/App.js
import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './header';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <div className="App">
        <Header/>
        <Sidebar/>
        <Dashboard/>
    </div>
  );
}

export default App;
