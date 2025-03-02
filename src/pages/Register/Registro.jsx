import { useState } from "react";

import Formulario from "./Formulario";
import Alert from "./Alert";

const Registro = () => {
  const [alert, setAlert] = useState({ error: "", msg: "", color: "" });
  return (
    <>
      <div className="container border border-light-subtle rounded-5 bg-white p-5">
        <h1 className="fs-1">Crea una cuenta</h1>
        <p>O usa tu email para registrarte</p>
        <Formulario setAlert={setAlert}/>
        {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
      </div>
    </>
  )
}

export default Registro;
