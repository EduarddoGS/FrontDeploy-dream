import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useReservaContext } from '../../context/reservaContext.jsx';
import './horario.css'

function Horario({onClickButton, selectedDate}) {
    const { reserva, setReserva } = useReservaContext();

    const horas = [
        '07:00 - 08:00', '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00',
        '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00',
        '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00'
    ];

    const [activeButton, setActiveButton] = useState(null);
    const [horarios, setHorarios] = useState([]);
    const [horariosDisponibles, setHorariosDisponibles] = useState([]);

    const handleButtonClick = (index , value) => {
        setActiveButton(index);
        onClickButton(value);
        console.log(value);
        // Dividir la cadena en dos partes usando el separador "-"
        const [horaInicio, horaFinal] = value.split(' - ');
        setReserva({
            ...reserva,
            hora_inicio: horaInicio,
            hora_final: horaFinal,
        });
        //console.log(horarios);
        //console.log(selectedDate);
    };

    useEffect(() => {
        // Llamada a la API utilizando Axios
        //console.log(formattedDate);
        axios.get(`https://apidream.azurewebsites.net/reserva/horarios/${selectedDate}`)
          .then(response => {
            console.log(response.data);
            
            const horariosFormateados = response.data.map(horario => {
                return `${horario.hora_inicio.slice(11, 16)} - ${horario.hora_final.slice(11, 16)}`;
            });
            
            setHorarios(horariosFormateados);
          })
          .catch(error => {
            console.error('Error fetching horarios:', error);
          });
      }, [selectedDate]);

      // Este efecto se ejecutará cada vez que cambie 'horarios'
        useEffect(() => {
            // Filtrar las horas que no se repiten
            const horasSinRepetir = horas.filter(hora => !horarios.includes(hora));
            setHorariosDisponibles(horasSinRepetir);
            //console.log(horasSinRepetir);
        }, [horarios]);

    

    return(

        <>
            <div className="salahorario">

                <div>
                <div className="titulo-horario">
                    Horarios Disponibles:
                </div>

                <div className="horarios">
                    <div className="horarios-scroll">
                    {horariosDisponibles.map((hora, index) => (
                        <button
                            key={index}
                            className={`hora ${activeButton === hora ? 'active' : ''}`}
                            onClick={() => handleButtonClick(hora,hora)}
                            value={hora}
                        >
                            {hora}
                        </button>
                    ))}
                    </div>
                </div>

                </div> 
            </div>
        </>
    );
}

export default Horario;