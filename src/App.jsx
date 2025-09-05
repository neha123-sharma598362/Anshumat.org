import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Initiatives from "./components/Initiatives";
import Programs from "./components/Programs";
import ContactForm from "./components/ContactForm";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Initiatives />
      <Programs />
      <ContactForm />
      <RegistrationForm />
      <Footer />
    </>
  );
}

export default App;
