import React, {useState, useEffect} from 'react';
import Navbar from '../Header/header';
import axios from 'axios';
import CardReservas from './CardReserva';
import Interior from '../../Experiences/Interior/Interior.jsx';
import './style.css';

function VerReservas() {
    const [reservaData, setReservaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Realizar la solicitud GET
            const response = await axios.get('https://apidream.azurewebsites.net/reserva/A00833968');
            // Almacenar los datos de la reserva en el estado
            console.log(response.data);
            setReservaData(response.data);
            //console.log(reservaData);
          } catch (error) {
            console.error('Error al obtener los datos de la reserva:', error);
          }
        };
    
        // Llamar a la función fetchData al montar el componente
        fetchData();
      }, []);

      useEffect(()=>{
        console.log("hola");
        console.log(reservaData)
      }, [reservaData]);

    return (
        <div>
            <Navbar />
            
            <div className="ContainerAll-reservas">
                <div className="Container-interior">
                <div className="titulo-reservas">
                    <h1>Reservas</h1>
                </div>
                <div className="Container-reservas">
                  
                {reservaData.map((reserva, index) => (
                        <CardReservas
                            key={index}
                            nombre = {reserva.nombre_sala}
                            proyecto = {reserva.nombre_proyecto}
                            dia_reserva = {reserva.dia_reserva}
                            hora_inicio = {reserva.hora_inicio}
                            hora_final = {reserva.hora_final}

                        />
                            
                        
                ))}
              
                </div>
                </div>
            </div>
        </div>
    );
}

export default VerReservas;