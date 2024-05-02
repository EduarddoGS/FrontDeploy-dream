import React, {useState} from 'react';
import './dispositivos.css'

function Dispositivo(props) {

    const [cantidad, setCantidad] = useState(0);

    const handleClickSuma = () => {
        if (cantidad < props.cantidad){
            setCantidad(cantidad + 1);
            props.actualizarCantidad(props.nombre, cantidad + 1);
        }
        
    }

    const handleClickResta = () => {
        if (cantidad > 0){
            setCantidad(cantidad - 1);
            props.actualizarCantidad(props.nombre, cantidad - 1);
        }
        
    }

    return(

        <>
            <div className="dispositivo-container" style={{ display: (!props.mostrarSpans && cantidad === 0) ? 'none' : 'flex' }}>

            <h5 className="dispositivo-nombre" style={{ display: props.mostrarSpans ? 'block' : 'none' }}>{props.nombre}</h5>
            <img src={props.url} />

            <div className="incremento-container">
                <button onClick={handleClickResta} style={{ display: props.mostrarSpans ? 'block' : 'none' }}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleClickSuma} style={{ display: props.mostrarSpans ? 'block' : 'none' }}>+</button>
            </div>

            </div>
            
        </>
    );
}

export default Dispositivo;