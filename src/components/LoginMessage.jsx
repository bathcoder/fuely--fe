import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../firebaseauth/AuthContext";

export default function LoginMessage() {
  const { currentUser } = useAuth();

  return (
  currentUser ? (
  <div className="LoginMessage">
  If a price looks incorrect, click on the station to update.
</div>
) : (
    <div className="LoginMessage">
      To submit a price, click <Link to={"/login"}> here to log in / sign up</Link>
    </div>
  )
  )
}
