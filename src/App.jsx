import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Inclusivo from './pages/inclusivo';
import Info from './pages/info';
import Premium from './pages/premium';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rota" element={<Inclusivo />} />
          <Route path="/info" element={<Info />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </Router>
  );
}

export default App;
