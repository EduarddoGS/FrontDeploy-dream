import React from 'react';
import './header.css'

function Navbar() {
    return(
        <>
        <div className="navbar">

        <div className="navbar-left">
          <div className="icon i-1">
            <img src="./src/assets/navbar/analitica.png" />
            
          </div>
          <div className="icon i-2">
           
            <img src="./src/assets/navbar/plano.png" />
            
            </div>
          <div className="icon i-3">
            
            <img src="./src/assets/navbar/reserva.png" />
            
            </div>
          </div>

        <div className="navbar-middle">
          <div className="icon i-4">
            
            <img src="./src/assets/navbar/casa.png" />
            
            </div>
        </div>

        <div className="navbar-right">

          <div className="icon i-5 busqueda">
            <div className="busqueda-img">
            <img src="./src/assets/navbar/lupa.png" />
            </div>
            <div className="busqueda-p">
            <p>Buscar Servicios</p>
            </div>
          </div>

          <div className="icon i-6">
            <img src="./src/assets/navbar/usuario.png" />
            </div>
        </div>
      </div>
        </>
    );
}

export default Navbar;