import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Calendario from '../calendario/Calendario.jsx';
import SalaDate from '../reserva-date/Saladate.jsx';
import Salareserva from '../reserva-sala/Salareserva.jsx';
import Horario from '../Horario/Horario.jsx';
import HorarioComponent from '../Horario/HorarioComponent.jsx';
import Dispositivos from '../Dispositivos/Dispositivos.jsx';
import ProyectoReserva from '../Proyecto/ProyectoReserva.jsx';
import BotonCrear from './BotonCrear.jsx';
import CircleLoader from './circleLoader.jsx';
import { useReservaContext } from '../../context/reservaContext.jsx';
import './reserva.css'

function Reserva() {
    const { reserva, setReserva } = useReservaContext();

    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(true);
    const [showCalendarComponent, setShowCalendarComponent] = useState(false);
    const [Hora, setHora] = useState(false);
    const [showHorario, setShowHorario] = useState(false);
    const [showHorarioComponent, setShowHorarioComponent] = useState(false);
    const [showDispositivos, setShowDispositivos] = useState(false);
    const [showDispositivosComponent, setShowDispositivosComponent] = useState(false);
    const [showIntegrantes, setShowIntegrantes] = useState(false);
    const [counter, setCounter] = useState(0);
    const [mostrarSpans, setMostrarSpans] = useState(true);
    const [mostrarUtilidad, setMostrarUtilidad] = useState(true);
    const [crearReserva, setCrearReserva] = useState(false);
    const [bandera, setBandera] = useState(0);


    const handleDateChange = (date) => {
        setSelectedDate(date);
        //console.log(date);
    };

    const actualizarFecha = () => {
        //console.log(selectedDate);
        const year = selectedDate.getFullYear();
        const month = ('0' + (selectedDate.getMonth() + 1)).slice(-2); // Añade un cero al mes si es necesario
        const day = ('0' + selectedDate.getDate()).slice(-2);  
        setReserva({
            ...reserva,
            dia_reserva: `${year}-${month}-${day}`,
          });
        //console.log(reserva.dia_reserva);
        
        
    }

    const handleHorarioChange = (Hora) => {
        setHora(Hora);
    }

    const handleAccept = () => {
        switch (counter) {
            case 0:
                actualizarFecha();
                setShowCalendar(false); // Oculta el calendario después de aceptar la fecha
                setShowCalendarComponent(true);
                setShowHorario(true);
                break;
            case 1:
                setShowHorario(false);
                setShowHorarioComponent(true);
                setShowDispositivos(true);

                break;
            // Añade más casos según sea necesario
            case 2:
                setMostrarSpans(false);
                setShowDispositivos(false);
                setShowDispositivosComponent(true);
                setShowIntegrantes(true);
                console.log("Default function");

                
                break;
            case 3:
                setMostrarUtilidad(false);
                setCrearReserva(true);
                console.log(reserva.id_sala);
                console.log(reserva.dia_reserva);
                console.log(reserva.hora_inicio);
                console.log(reserva.hora_final);
                console.log(reserva.dispositivos);
                console.log(reserva.lider_reserva);
                console.log(reserva.id_proyecto);
                break;

        }
        
        // Incrementa el contador
        setCounter(counter + 1);
        
    };

    let titulo;
    if (counter === 0) {
        titulo = "Elige la Fecha";
    } else if (counter === 1) {
        titulo = "Elige el Horario";
    } else if (counter == 2){
        titulo = "Elige tus Dispositivos";
    } else if (counter == 3){
        titulo = "Elige tu Proyecto";
    } else if (counter == 4){
        titulo = "Resumen de reserva"
    }

    return(
        <div className="ContenedorTotal">
        <div className="Contenedor">

            <div className="All-contenedor">
                
                <div className="titulo">
                    <h1>{titulo}</h1>
                </div>

                <div className="reserva-info">

                <div className="apartado1">

                    <div className="reserva-sala">
                        <Salareserva nombre="Lego Room" />
                    </div>

                    <div className="reserva-date" style={{ display: showCalendarComponent ? 'flex' : 'none' }}>
                        <SalaDate selectedDate={reserva.dia_reserva} />
                    </div>

                    <div className="reserva-hora" style={{ display: showHorarioComponent ? 'flex' : 'none' }}>
                        <HorarioComponent hora={Hora} />
                    </div>
                    
                </div>

                <div className="calendar-container" style={{ display: showCalendar ? 'flex' : 'none' }}>
                    <Calendario onDateChange={handleDateChange} />
                </div>

                <div className="horario-container" style={{ display: showHorario ? 'flex' : 'none' }}>
                    <Horario onClickButton={handleHorarioChange} selectedDate={reserva.dia_reserva}/>
                </div>


                <div className={`${showDispositivosComponent ? 'apartado2' : 'apartado21'}`} >
                    

 
                    <div className={`${showDispositivos ? 'dispositivos-sala' : 'dispositivo-component'}`} style={{ display: showDispositivos || showDispositivosComponent ? 'flex' : 'none' }} >
                        <Dispositivos mostrarSpans={mostrarSpans} style={{ display: showDispositivos || showDispositivosComponent ? 'flex' : 'none' }}/>
                    </div>

                </div>


                <div className="proyecto-container" style={{ display: showIntegrantes ? 'flex' : 'none' }}>
                    <ProyectoReserva mostrarUtilidad={mostrarUtilidad} />
                </div>



                </div>

                {bandera === 1 ? (
                    <div className="reserva-creada">
                        <CircleLoader />
                        <div id="ir-reservas" className="reserva-completada">
                        <h2>Reserva Creada con Exito</h2>

                        <Link to="/reservas">
                            <button >Ver Reservas</button>
                        </Link>

                        </div>
                    </div>
                ) : bandera === 2 ? (
                    <div className="error-reserva">
                        
                    </div>
                ) : null}







            </div>



        </div>

        
                <div id="aceptar-button-calendar" style={{ display: bandera === 0 ? 'flex' : 'none' }}>

                {crearReserva  ? <BotonCrear onClick1={() => setBandera(1)} onClick2={() => setBandera(2)} /> : <button onClick={handleAccept}>Aceptar</button>}

                </div>
       

        </div>
    );
}

export default Reserva;