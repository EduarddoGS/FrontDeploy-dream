import React, {useState, useEffect} from 'react';
import Interior from '../../Experiences/Interior/Interior.jsx';

import './style.css';

function CardReservas(props) {

    const [fechaReserva, setFechaReserva] = useState("");
    const horaInicio = props.hora_inicio.split('T')[1].substring(0, 5);
    const horaFinal = props.hora_final.split('T')[1].substring(0, 5);

    useEffect(() => {
        const fechaCompleta = new Date(props.dia_reserva);
        const fechaFormateada = fechaCompleta.toISOString().split('T')[0];
        setFechaReserva(fechaFormateada);
    }, [props.dia_reserva]);

    




    return (
        <div className="ContainerCard">
            <div className="img-Container">
                 <Interior />
            </div>
            <div className="card">
                <div>
                <h2 id="sala">{props.nombre}</h2> 
                <h2>Asunto: {props.proyecto}</h2>
                <h2>Fecha: {fechaReserva}</h2>
                <h2>Horario: {horaInicio} - {horaFinal}</h2>
                </div>
            </div>
            
        </div>
    );
}

export default CardReservas;