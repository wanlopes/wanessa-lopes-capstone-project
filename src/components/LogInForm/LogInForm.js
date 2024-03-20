import "./LogInForm.scss";
import Logo from "../../assets/FilmFlow.png";
import err from "../../assets/error-24px.svg";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LogInForm({ setUser }) {
  // Removes the token whenever someone is trying to login
  localStorage.removeItem("token");

  const initialFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setErrorMessage("All fields are required");
      return;
    }

    axios
      .post("http://localhost:8080/api/user/login", {
        username: formData.username,
        password: formData.password,
      })
      .then((response) => {
        if (response.status === 200) {
          const { token } = response.data;
          localStorage.setItem("token", token);
          setUser(response.data.user);
          console.log("Login successful:", response.data.user);
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setErrorMessage("Password is incorrect!");
          alert("Password is incorrect!");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section>
      <div className="login">
        <div className="login__logo">
          <img className="login__logo__img" src={Logo} alt="logo_image" />
        </div>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errorMessage && (
            <p className="validate">
              <img src={err} alt="errorIcon" /> Password is incorrect!
            </p>
          )}
          <button className="login__form__button">Login</button>
          <button className="login__form__button">
            <Link to="/account">Create an Account</Link>
          </button>
        </form>
      </div>
    </section>
  );
}

export default LogInForm;
