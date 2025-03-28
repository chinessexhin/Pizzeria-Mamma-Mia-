import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

import Formulario from "./Formulario";
import Alert from "./Alert";

const Registro = () => {
  const { register } = useContext(UserContext)
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ error: "", msg: "", color: "" });

  // Función para manejar el registro
  const handleRegister = async (credentials) => {
    const success = await register(credentials);
    if (success) {
      setAlert({ msg: "Registro exitoso", color: "success" });
      setTimeout(() => navigate("/dashboard"), 2000);
    } else {
      setAlert({ msg: "Error en el registro", color: "danger" });
    }
  };

  return (
    <div className="container border border-light-subtle rounded-5 bg-white p-5">
      <h1 className="fs-1">Crea una cuenta</h1>
      <p>O usa tu email para registrarte</p>
      <Formulario setAlert={setAlert} onSubmit={handleRegister} />
      {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
    </div>
  );
};

export default Registro;
