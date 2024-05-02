import React from 'react';
import CuadroLogin from './Cuadrologin';
import './loginstyle.css'

function Login() {
    return(
        <>
            <div className="login-container">
                <div className="redes">
                    <div className="redes-list">
                        <img className="facebook" src="../public/facebook.png" />
                        <img id="insta" src="../public/instagram.png" />
                        <img id="youtube" src="../public/youtube.png" />
                    </div>
                    <div className="logo">
                        <img src="../public/CodeTec.png" />
                    </div>
                </div>
                <div className="login-img">
                    <div className="container-img">
                        <img src="../public/prueba.png" />
                    </div>
                    <div className="container-cuadro">
                        <CuadroLogin />
                    </div>
                    
                </div>
                <div className="privacidad">
                    <p>Aviso de privacidad</p>
                    <p>© 2024 Tecnologico de Monterrey</p>

                </div>
                
            </div>
            
            
        </>
    );
}

export default Login;