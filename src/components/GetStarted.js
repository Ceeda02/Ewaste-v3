import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function GetStarted() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLoginClose = () => {
    setShowLoginModal(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleRegisterClose = () => {
    setShowRegisterModal(false);
  };

  const handleLoginSubmit = async (e) => {
    console.log("Login button clicked");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        // Handle successful login, e.g., by setting user state
        handleLoginClose();
      } else if (response.status === 401) {
        // Handle authentication error
        console.error("Authentication failed");
      } else if (response.status === 500) {
        // Handle server error
        console.error("Server error");
      } else {
        // Handle other errors
        console.error("An error occurred");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    console.log("Register button clicked");
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (response.status === 201) {
        // Handle successful registration, e.g., by setting user state
        handleRegisterClose();
      } else if (response.status === 400) {
        // Handle validation error or duplicate user error
        console.error("Registration failed: Invalid data or duplicate user");
      } else if (response.status === 500) {
        // Handle server error
        console.error("Server error");
      } else {
        // Handle other errors
        console.error("An error occurred");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <div className="container pt-5 pb-5 mt-5">
        <h1>Welcome to EcoCycle</h1>
        <p>Get started by logging in or registering:</p>
        <div className="row">
          <div className="col-md-6">
            <button
              className="btn btn-primary btn-lg"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-success btn-lg"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Login form */}
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={handleLoginClose}
              >
                Login
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLoginClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Register Modal */}
      <Modal show={showRegisterModal} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Registration form */}
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success btn-block"
                onClick={handleRegisterClose}
              >
                Register
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleRegisterClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GetStarted;
