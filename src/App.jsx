import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Building from './Experiences/Building/Building';
import InteriorA from './Experiences/Interior/InteriorA';
import Login from './Componentes/Login/PantallaLogin';
import VerReservas from './Componentes/VerReservas/VerReservas';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Building/>} />
        <Route path="/reservas" element={<VerReservas/>} />
        <Route path="/Interior" element={<InteriorA/>} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
   
    </>
  );
}

export default App;