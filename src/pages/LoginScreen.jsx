import React from "react";
import { useDispatch } from "react-redux";

import GoogleButtom from "react-google-button";
import { Link } from "react-router-dom";

import { googleLogin, emailAndPasswordLogin } from "../actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  const handleEmailLogin = (e) => {
    e.preventDefaul();
    dispatch(emailAndPasswordLogin(email.password));
  };

  return (
    <div className="container">
      <h3>Iniciar Sesión</h3>
      <hr />
      <div className="row container">
        <form onSubmit={handleEmailLogin} className="col s12">
          <div className="input-field col s12">
            <i className="material-icons prefix">email</i>
            <input
              id="icon_prefix1"
              className="materialize-textarea"
              type="email"
              onChange={handleChange}
              value={email}
              name="email"
            />
            <label htmlFor="icon_prefix1">Correo</label>
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">vpn_key</i>
            <input
              id="icon_prefix2"
              className="materialize-textarea"
              type="password"
              onChange={handleChange}
              value={password}
              name="password"
            />
            <label htmlFor="icon_prefix2">Contraseña</label>
          </div>

          <div>
            <button className="waves-effect waves-light btn" type="submit">
              Enviar
            </button>
          </div>
          <hr />
          <GoogleButtom
            onClick={handleGoogleLogin}
            label="Iniciar sesión en Google"
          />
          <Link to="/register">Registrar en la plataforma</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
