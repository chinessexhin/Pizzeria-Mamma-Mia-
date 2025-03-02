import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div>
        <form className="formulario">
        <div className="form-group mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="tuemail@ejemplo.com"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            Registrarse
          </button>
        </div>
     </form>
     <p className="mt-3 text-center">
       ¿No cuentas con una cuenta? <Link to="/"> Registtrate!</Link>
     </p>
    </div>
    </>
  )
}

export default Login
