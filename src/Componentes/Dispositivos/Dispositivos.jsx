import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Dispositivo from './Dispositivo.jsx';
import { useReservaContext } from '../../context/reservaContext.jsx';
import './dispositivos.css'

function Dispositivos({mostrarSpans}) {

    const { reserva, setReserva } = useReservaContext();
    const [dispositivos, setDispositivos] = useState([]);
    const [dispositivosArreglo, setDispositivosArreglo] = useState([]);
    

    useEffect(() => {
        // Llamada a la API utilizando Axios
        console.log(reserva.id_sala);
        //console.log(formattedDate);
        axios.get(`https://apidream.azurewebsites.net/sala/dispositivos/${reserva.id_sala}`)
          .then(response => {
            console.log(response.data);
            setDispositivos(response.data);
            const dispositivosData = response.data.map(dispositivo => ({
                ...dispositivo,
                cantidad: 0 // Inicializar la cantidad en 0 para cada dispositivo
            }));

            setDispositivosArreglo(dispositivosData);
          })
          .catch(error => {
            console.error('Error fetching horarios:', error);
          });
      }, [reserva.id_sala]);

      useEffect(() => {
        // Filtrar las horas que no se repiten
        setReserva({
            ...reserva,
            dispositivos: dispositivosArreglo,
        })
        //console.log(horasSinRepetir);
    }, [dispositivosArreglo]);


    
    const actualizarCantidadDispositivo = (nombre, nuevaCantidad) => {
        
        setDispositivosArreglo(dispositivosArreglo.map(dispositivo => {
            //console.log(dispositivo.nombre)
            if (dispositivo.nombre === nombre) {
                //console.log("se hizo match")
                return { ...dispositivo, cantidad: nuevaCantidad };
            } else {
                //console.log("no esta el nombre")
                //console.log(dispositivo);
                return dispositivo;
            }
            
        }));
        

    }
    


    return(

        <>
            <div className="dispositivos-Container">
                <div className="dispositivos">
                {dispositivos.map((dispositivo, index) => (
                        <Dispositivo
                            key={index}
                            nombre = {dispositivo.nombre}
                            url = {dispositivo.imagen}
                            cantidad = {dispositivo.cantidad}
                            mostrarSpans={mostrarSpans}
                            actualizarCantidad={actualizarCantidadDispositivo}

                        />
                            
                        
                    ))}

                </div>
            </div>
        </>
    );
}

export default Dispositivos;