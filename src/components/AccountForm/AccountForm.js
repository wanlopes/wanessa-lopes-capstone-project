import React, { useState } from "react";
import "./AccountForm.scss";

function AccountForm() {
  const inicialFormData = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  }

  const [ formData, setFormData] = useState(inicialFormData);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  
  }


    return (
      <section>
        <div className="section">
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
              type="text"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            <label></label>
            <input
              type="text"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleInputChange}
              placeholder="Confirm Password"
            />
            <button>Register</button>
          </form>
        </div>
      </section>
    );
}

export default AccountForm;