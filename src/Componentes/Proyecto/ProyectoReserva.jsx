import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useReservaContext } from '../../context/reservaContext.jsx';
import "./proyectoreserva.css"

function ProyectoReserva(props) {
    const { reserva, setReserva } = useReservaContext();

    const [selectedOption, setSelectedOption] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [integrantesList, setIntegrantesList] = useState([]);
    const [proyectos, setProyectos] = useState([]);
    const [projectName, setProjectName] = useState('');

    useEffect(() => {
        // Llamada a la API utilizando Axios
        console.log(reserva.lider_sala);
        //console.log(formattedDate);
        axios.get(`https://apidream.azurewebsites.net/proyecto/${reserva.lider_reserva}`)
          .then(response => {
            console.log(response.data);
            setProyectos(response.data);
          })
          .catch(error => {
            console.error('Error fetching horarios:', error);
          });
      }, [reserva.lider_sala]);


    const handleChangeInput = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleAceptar = () => {
        if (inputValue.trim() !== '') {
          setIntegrantesList([...integrantesList, inputValue]);
          setInputValue('');
        }
      };

      const handleEliminar = (index) => {
        setIntegrantesList(integrantesList.filter((_, i) => i !== index));
      };

    const handleChange = (event) => {
        
        
        const selectedValue = event.target.value;
        const selectedProject = proyectos.find(proyecto => proyecto.id_proyecto[0] === parseInt(selectedValue));
        setSelectedOption(event.target.value);
        setProjectName(selectedProject ? selectedProject.nombre : ""); 
        setReserva({
            ...reserva,
            id_proyecto: event.target.value,
        })
        
        console.log(projectName)
      };
      

    return (
        <div className="proyectoreserva">
            <div className="proyecto">
                <h4 style={{ display: props.mostrarUtilidad ? 'flex' : 'none' }}>Asignar Proyecto:</h4>
                <select id="selectInput" value={selectedOption} onChange={handleChange} style={{ display: props.mostrarUtilidad ? 'flex' : 'none' }}>
                    <option value="">--Selecciona--</option>
                    {proyectos.map((proyecto, index) => (
                        <option
                            key={index}
                            value={proyecto.id_proyecto[0]}
                        >{proyecto.nombre}</option>
                            
                        
                    ))}
                </select>
                <h4 style={{ display: props.mostrarUtilidad ? 'none' : 'flex' }}>Proyecto Asignado:</h4>
                <div className="proyectoInput" style={{ display: props.mostrarUtilidad ? 'none' : 'flex' }}>
                {projectName}
                </div>
                
            </div>
            <div className="integrantes">
                <h4 style={{ display: props.mostrarUtilidad ? 'flex' : 'none' }}>Añadir integrantes:</h4>
                <h4 style={{ display: props.mostrarUtilidad ? 'none' : 'flex' }}>Integrantes Extra:</h4>
                <div className="añadir">
                    <div className="inputs" style={{ display: props.mostrarUtilidad ? 'flex' : 'none' }}>
                            <input type="text" value={inputValue} onChange={handleChangeInput}/>
                            <button onClick={handleAceptar}>+</button>
                    </div>

                    <div className="integrantes-display">
                        <div className="integrantes-scroll">
                        {integrantesList.map((integrante, index) => (
                            <div  className="integrante" key={index}>
                            <p >{integrante}</p>
                            <button onClick={() => handleEliminar(index)} style={{ display: props.mostrarUtilidad ? 'flex' : 'none' }}> - </button>
                            </div>
                        ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ProyectoReserva;