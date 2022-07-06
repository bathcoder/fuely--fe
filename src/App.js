import "./styles/App.css";
import Main from "./components/Main";

import React from "react";
import Signup from "./firebaseauth/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./firebaseauth/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      {/* <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      > */}
        {/* <div className="w-100" style={{ maxWidth: "400px" }}> */}
                {/* </div> */}
              {/* </Container> */}
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </AuthProvider>
          </Router>
    </div>
  );



}

export default App;
