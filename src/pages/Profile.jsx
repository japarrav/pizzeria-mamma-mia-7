const Profile = () => {
  const userEmail = "usuario@example.com";

  const handleLogout = () => {
    alert('Cerrando sesión...');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body text-center">
              <h2 className="card-title mb-4">Perfil de Usuario</h2>
              <div className="mb-4">
                <div className="text-center mb-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="80" 
                    height="80" 
                    fill="currentColor" 
                    className="bi bi-person-circle" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
                </div>
                <p className="lead">Email:</p>
                <p className="fs-5 fw-bold">{userEmail}</p>
              </div>
              <button 
                className="btn btn-danger btn-lg w-100" 
                onClick={handleLogout}
              >
                🔒 Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
