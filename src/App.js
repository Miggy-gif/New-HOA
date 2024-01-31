// src/App.js
import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update import statement
import Dashboard from './Pages/Dashboard';
import Dues from './Pages/Dues';
import Notification from './Pages/Notification';



function App() {
  return (
    <div className="App">
       <Router>
        <Sidebar>
          <Routes> {/* Use Routes instead of Switch */}
            <Route path='/dashboard' element={Dashboard} />
            <Route path='/dues' element={Dues} />
            <Route path='/notification' element={Notification} />
          </Routes>
        </Sidebar>
      </Router>
        <Header/>
        
    </div>
  );
}

export default App;
