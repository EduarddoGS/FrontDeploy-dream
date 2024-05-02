import React from 'react';
import './pasos.css'

function Pasos() {
    return(
        <>
        <div className="Contenedor-pasos">
            <div className="img-contenedor">
                <img src="./src/assets/Pasos/ubicacionA.png" />
            </div>
            <div className="img-contenedor">
            <img src="./src/assets/Pasos/calendarioA.png" />
            </div>
            <div className="img-contenedor">
            <img src="./src/assets/Pasos/devices.png" />
            </div>
            <div className="img-contenedor">
            <img src="./src/assets/Pasos/grupoA.png" />
            </div>
        </div>
        </>
    );
}

export default Pasos;