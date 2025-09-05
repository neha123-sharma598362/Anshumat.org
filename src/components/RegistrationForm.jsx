import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple Validation
    if (!formData.name || !formData.email) {
      alert("Name and Email are required!");
      return;
    }

    alert(" Registration Successful!");
    setFormData({ name: "", email: "", phone: "", interest: "" });
  };

  return (
    <section id="register" className="register">
      <h2>Register with Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone Number (optional)" value={formData.phone} onChange={handleChange} />
        <input type="text" name="interest" placeholder="Area of Interest (optional)" value={formData.interest} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default RegistrationForm;
