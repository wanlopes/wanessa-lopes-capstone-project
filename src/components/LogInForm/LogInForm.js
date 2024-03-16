import "./LogInForm.scss";
import Logo from "../../assets/FilmFlow.png";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function LogInForm () {
  const initialFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (
      !formData.username ||
      !formData.password 
    ) {
      alert("aaaaa");
      setErrorMessage("All fields are required");
      return;
    }

    const emailRegex =
      /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Invalid email address");
      return;
    }

    axios
      .post("http://localhost:8080/api/user/login", {
        username: formData.username,
        password: formData.password,
      })
      .then((response) => {
        console.log("Response from server:", response.data);
        const userId = response.data.user.id;
        alert("Login successful!");
        window.location.href = `http://localhost:3000/profile/${userId}`;
      })
      .catch((error) => {
        console.error("Error during login:", error.response.data);
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
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <label htmlFor="password"></label>
            <input
              type="password"
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