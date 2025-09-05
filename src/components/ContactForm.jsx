import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.message){
      alert("All fields are required!");
    } else {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}/>
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}/>
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}/>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
