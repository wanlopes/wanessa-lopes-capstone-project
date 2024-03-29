import React, { useState } from "react";
import axios from "axios";
import "./AccountForm.scss";
import Logo from "../../assets/FilmFlow.png";
import err from "../../assets/error-24px.svg";
import { useNavigate } from "react-router-dom";

function AccountForm() {
  const navigate = useNavigate();
  localStorage.removeItem("token");

  const initialFormData = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
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
    setErrorMessage(null);
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirm_password
    ) {
      setErrorMessage("All fields are required");
      return;
    }

    const emailRegex =
      /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Invalid email address");
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setErrorMessage("Passwords do not match");
      return;
    }

    axios
      .post("http://localhost:8080/api/user/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error registering user:", error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section>
      <div className="section">
        <div className="section__logo">
          <img className="section__logo__img" src={Logo} alt="logo_image" />
        </div>
        <form className="section__form" onSubmit={handleSubmit}>
          <label></label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username"
          />
          <label></label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <label></label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          <label></label>
          <input
            type="password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleInputChange}
            placeholder="Confirm Password"
          />
          {errorMessage && (
            <p className="validate">
              <img src={err} alt="errorIcon" /> {errorMessage}
            </p>
          )}
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AccountForm;
