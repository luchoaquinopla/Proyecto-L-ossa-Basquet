import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; 
import "../styles/Formulario.css";

const Formulario: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Nombre: ${name}, Email: ${email}, Número: ${number}`);
    };

    return (
        <div className="container">
            {/* Sección del Formulario */}
            <div className="form-container">
                <h1 className="titulo">Contáctanos</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nombre"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            id="whatsapp-number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="WhatsApp"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>

            {/* Sección de Información */}
            <div className="info-container">
                <h2 className="info-title">Información</h2>
                <div className="info-item">
                    <FaMapMarkerAlt className="icon" />
                    <p>Calle 123, Ciudad XYZ</p>
                </div>
                <div className="info-item">
                    <FaPhoneAlt className="icon" />
                    <p>+54 9 123 456 789</p>
                </div>
                <div className="info-item">
                    <FaEnvelope className="icon" />
                    <p>contacto@clubdeportivo.com</p>
                </div>
            </div>
        </div>
    );
}

export default Formulario;
