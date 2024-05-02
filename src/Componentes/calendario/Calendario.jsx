import React , { useContext, useState }from 'react';
//import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './calendario.css'



function Calendario({onDateChange}) {
  
    const [date, setDate] = useState(new Date());



    const onChange = (newDate) => {
      setDate(newDate);
      //console.log(date);
      onDateChange(newDate);
      
    };
    

    return (
    <div className="all-calendar-container">
      <div className="CalendarContainer"  id="myCalendar" >
        <Calendar  onChange={onChange} value={date} 
                className="custom-calendar" // Clase CSS personalizada para el calendario
                calendarClassName="custom-calendar-container" // Clase CSS personalizada para el contenedor del calendario
                tileClassName="custom-tile"/>
      </div>

      </div>
    );
}

export default Calendario;