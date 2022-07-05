import React from "react";
import { Link } from "react-router-dom";


export default function LoginMessage() {
  return (
    <div className="LoginMessage">
      To submit a price, click <Link to={"/login"}> here to log in / sign up</Link>
    </div>
  );
}
