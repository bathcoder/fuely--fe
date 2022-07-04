import "./styles/App.css";
import Home from "./components/Home";
import Header from "./components/Header";

import React from "react";
import Signup from "./firebaseauth/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./firebaseauth/AuthContext";

function App() {
  return (
    <>
     <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
        >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
    </>
  );

  {
    /* <Header />
<Home /> */
  }
}

export default App;
