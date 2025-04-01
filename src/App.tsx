import React from "react";
import Logo from"./components/Logo";
import Formulario from "./components/Formulario"
import WhatsAppButton from "./components/whatsappButton";
import Footer from "./components/Footer";
import "./styles/app.css";

const App: React.FC = () =>{
  return(
    <div className = "app">
      <Logo />
      <Formulario />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}





export default App