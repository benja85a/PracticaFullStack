// Navbar.js
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContex";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light border border-secondary rounded">
      <div className="container">
        <Link to={isAuthenticated ? "/tasks" : "/"} className="navbar-brand">
          Tasks Manager
        </Link>
        
        <div className="navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">Welcome User {user.username}</span>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary me-2" to="/add-task">
                    Add Task
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-primary me-2" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
