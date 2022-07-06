import "./styles/App.css";
import Main from "./components/Main";
import React from "react";
import Signup from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./firebaseauth/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
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
