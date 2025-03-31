import React from "react";
import Logo from"./components/Logo";
import Formulario from "./components/Formulario"
import "./styles/app.css";

const App: React.FC = () =>{
  return(
    <div className = "app">
      <Logo />
      <Formulario />
    </div>
  )
}





export default App