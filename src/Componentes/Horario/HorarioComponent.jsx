import React, {useState} from 'react';
import './horario.css'

function HorarioComponent({hora}) {


    return(

        <>
            <div className="horario-component">
                <p>{hora}</p>
            </div>
        </>
    );
}

export default HorarioComponent;