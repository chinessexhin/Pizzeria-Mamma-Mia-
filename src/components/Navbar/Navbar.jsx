import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate ("/");
  };

  const setActiveClass = ({isActive}) => ( isActive ? "active nav-link" : "nav-link");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid justify-content-start">
        <a className="navbar-brand" href="/Home">Pizzeria Mamma Mia!</a>
        <div className="button-container2">
          <button type="button" className="btn btn-dark" onClick={() => window.location.href = "/Home"}>🍕Home</button>
          <button type="button" className="btn btn-dark" onClick={() => window.location.href = "/login"}>🔐Login</button>
           <button type="button" className="btn btn-dark" onClick={() => window.location.href = "/logout"}>🔓Logout</button>
          <button type="button" className="btn btn-dark" onClick={() => window.location.href = "/register"}>🔐Register</button>
        </div>
      </div>

        <div className="navbar-nav ml-auto justify-content-start">
         <button type="button" className="btn btn-dark" onClick={() => window.location.href = "/Carrito"}>🛒Total: {}</button>
        </div>

    </nav>
  )
}

export default Navbar;
