import {
  ArrowRightOnRectangleIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            DevConnect
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center">
              <HomeIcon className="h-5 w-5 mr-1" />
              Home
            </Link>
            {!isAuthenticated ? (
              <>
                <Link to="/register" className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-1" />
                  Register
                </Link>
                <Link to="/login" className="flex items-center">
                  <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" />
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="flex items-center">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="flex items-center">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
