import { useContext } from "react";
import { UserContext } from "../../context/UserProvider"; 
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid justify-content-start">
        <a className="navbar-brand" href="/Home">Pizzería Mamma Mia!</a>

        <div className="button-container2">
          <button type="button" className="btn btn-dark" onClick={() => navigate("/Home")}>🍕Home</button>
          
          {user ? (
            <>
              <button type="button" className="btn btn-dark" onClick={() => navigate("/profile")}>👤 Profile</button>
              <button type="button" className="btn btn-dark" onClick={handleLogout}>🔓 Logout</button>
            </>
          ) : (
            <>
              <button type="button" className="btn btn-dark" onClick={() => navigate("/login")}>🔐 Login</button>
              <button type="button" className="btn btn-dark" onClick={() => navigate("/register")}>📝 Register</button>
            </>
          )}
        </div>
      </div>

      <div className="navbar-nav ml-auto justify-content-start">
        <button type="button" className="btn btn-dark" onClick={() => navigate("/Carrito")}>🛒 Total: {}</button>
      </div>
    </nav>
  );
};

export default Navbar;
