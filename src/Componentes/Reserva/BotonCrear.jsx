import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useReservaContext } from '../../context/reservaContext.jsx';

function BotonCrear({ onClick1, onClick2 }) {
    const { reserva, setReserva } = useReservaContext();
    
    const handleCrearReserva = async () => {
        try {
            const response = await axios.post('https://apidream.azurewebsites.net/reserva/creareserva', {
                id_sala: reserva.id_sala,
                id_proyecto: reserva.id_proyecto,
                lider_reserva: reserva.lider_reserva,
                dia_reserva: reserva.dia_reserva,
                hora_inicio: reserva.hora_inicio,
                hora_final: reserva.hora_final,
                dispositivos: reserva.dispositivos,
            });

            console.log('Reserva creada correctamente:', response.data);
            onClick1();
            // Aquí puedes realizar cualquier acción adicional después de crear la reserva, como redireccionar o actualizar el estado

        } catch (error) {
            console.error('Error al crear reserva:', error);
            onClick2();
            // Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
        }
    };

    return (
       
            <button id="crear-reserva" onClick={handleCrearReserva}>Crear Reserva</button>
        
    );
}

export default BotonCrear;