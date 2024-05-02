import React, {useState, useEffect} from 'react';
import "./reserva.css";

const CircleLoader = () => {

    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setCompleted(!completed);
        }, 2000);
        
        return () => clearTimeout(timer);
      }, []);

  return (
    <div>

      <div className={`circle-loader ${completed ? 'load-complete' : ''}`}>
        <div className="checkmark draw" style={{ display: completed ? 'flex' : 'none' }}></div>
      </div>

    </div>
  );
}

export default CircleLoader;







