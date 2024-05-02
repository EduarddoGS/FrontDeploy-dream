import { createContext , useState, useContext}  from "react";

const ReservaContext = createContext();

const ReservaProvider = ({ children }) => {
    const [reserva, setReserva] = useState({
      id_sala: '0',
      id_proyecto: '',
      lider_reserva: 'A00833968',
      dia_reserva: '',
      hora_inicio: '',
      hora_final: '',
      dispositivos: '',
      // Otros atributos que desees
    });
  
    return (
      <ReservaContext.Provider value={{ reserva, setReserva }}>
        {children}
      </ReservaContext.Provider>
    );
  };

  // Hook personalizado para acceder al contexto
const useReservaContext = () => useContext(ReservaContext);

export { ReservaProvider, useReservaContext };
  

