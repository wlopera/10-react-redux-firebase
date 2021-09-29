import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    username: "",
    password1: "",
    password2: "",
  });

  const { email, username, password1, password2 } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (username.trim().length < 2) {
      return;
    }

    if (password1.trim().length < 6 || password2.trim().length < 6) {
      return;
    } else {
      if (password1.trim() !== password2.trim()) {
        return;
      }
    }

    dispatch(register(email, password1, username));
  };

  return (
    <div className="container">
      <h3>Registro</h3>
      <hr />
      <div className="row container">
        <form onSubmit={handleRegister} className="col s12">
          <div className="input-field col s12">
            <i className="material-icons prefix">email</i>
            <input
              onChange={handleChange}
              value={email}
              name="email"
              id="icon_prefix1"
              className="materialize-textarea"
              type="email"
            />
            <label htmlFor="icon_prefix1">Correo</label>
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">assignment_ind</i>
            <input
              onChange={handleChange}
              value={username}
              name="username"
              id="icon_prefix2"
              className="materialize-textarea"
              type="text"
            />
            <label htmlFor="icon_prefix2">Nombre de usuario</label>
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">vpn_key</i>
            <input
              onChange={handleChange}
              value={password1}
              name="password1"
              id="icon_prefix3"
              className="materialize-textarea"
              type="password"
            />
            <label htmlFor="icon_prefix3">Contraseña</label>
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">vpn_key</i>
            <input
              onChange={handleChange}
              value={password2}
              name="password2"
              id="icon_prefix4"
              className="materialize-textarea"
              type="password"
            />
            <label htmlFor="icon_prefix4">Comfirmar contraseña</label>
          </div>
          <div>
            <button className="waves-effect waves-light btn" type="submit">
              Enviar
            </button>
          </div>
          <hr />
          <Link to="/login">Iniciar sesión</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
