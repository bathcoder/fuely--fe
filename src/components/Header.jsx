import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../firebaseauth/AuthContext";
import { Button } from "react-bootstrap";
import { useState } from "react";

//this should contain:
//1. LOGO AND NAME
//2. login/signup button
//3. Cog wheel (options)?

const Header = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      //   navigate("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <div className="header">
      <h1 className="title">Fuely</h1>
      <p>
        {currentUser ? (
          <>
            <p>Hello {currentUser._delegate.email}!</p>
            <Button variant="link" onClick={handleLogout}>
              Log out
            </Button>
          </>
        ) : (
          <Link to={"/login"}>Log in / Sign up</Link>
        )}
      </p>
    </div>
  );
};

export default Header;
