import React from 'react';
import { Link } from 'react-router-dom';
import './loginstyle.css'

function CuadroLogin() {
    return(
        <>
        <div id="container-flex">
        <div className="container-card">
            <div className="login-card display-flex">
                <img src="../public/vite.svg"/>
                <form id="login-form" className="display-flex">
                <div className="input-login">
                    <div className="display-input">
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" placeholder='Escribe tu usuario...'/>
                    </div>
                </div>
                <div className="input-login">
                    <div className="display-input">
                    <label htmlFor="password" id="label-form">Contraseña: </label>
                    <input type="password" id="password" placeholder='Escribe tu contraseña...'/>
                    </div>
                </div>
                <div className="a-div">
                <a href="/forgot-password" className="a-form">Olvide mi contraseña</a>
                </div>
                <Link to="/" id="button-form">Iniciar Sesión</Link>
                </form>
            </div>
            </div>
            </div>
        </>
    );
}

export default CuadroLogin;