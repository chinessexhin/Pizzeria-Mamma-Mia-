import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, getUserProfile, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getUserProfile();
  }, [getUserProfile]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container border border-light-subtle rounded-5 bg-white p-5">
      <h1 className="fs-1">Perfil</h1>
      {user ? (
        <>
          <p className="fs-5">Bienvenido, <strong>{user.email}</strong></p>
          <button className="btn btn-danger" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <p>No hay usuario autenticado</p>
      )}
    </div>
  );
};

export default Profile;

