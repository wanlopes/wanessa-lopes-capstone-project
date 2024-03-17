import "./LogInForm.scss";
import Logo from "../../assets/FilmFlow.png";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LogInForm({setUser}) {
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
        console.log("Login successful:", response.data.user);
        setUser(response.data.user);
         console.log("Redirecting to home page...");
         navigate("/");
        // TODO: Sugiro SETAR O USER no STATE
        //TODO: Sugiro usar navigate e ir para a página de profile após setar o state
      })
      .catch((error) => {
        console.error("Error during login:", error);
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
