import React from 'react';
import './Salareserva.css'

function SalaDate({selectedDate}) {
    return(
        <>
            <div className="saladate">
            {selectedDate && (
                    <p> {selectedDate}</p>
                )}
            </div>
        </>
    );
}

export default SalaDate;