import React from "react";
import GoogleButtom from "react-google-button";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="container">
      <h3>Iniciar Sesión</h3>
      <hr />
      <div className="row container">
        <form className="col s12">
          <div className="input-field col s12">
            <i className="material-icons prefix">email</i>
            <input
              id="icon_prefix2"
              className="materialize-textarea"
              type="text"
            />
            <label for="icon_prefix2">Correo</label>
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">vpn_key</i>
            <input
              id="icon_prefix2"
              className="materialize-textarea"
              type="text"
            />
            <label for="icon_prefix2">Contraseña</label>
          </div>

          <div>
            <button className="waves-effect waves-light btn" type="submit">
              Enviar
            </button>
          </div>
          <hr />
          <GoogleButtom
            onClick={console.log("Google")}
            label="Iniciar sesión en Google"
          />
          <Link to="/register">Registrar en la plataforma</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
