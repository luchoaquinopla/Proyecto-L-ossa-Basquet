import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa"; 
import { sendContactMessage } from "../services/sendMessage";
import "../styles/Formulario.css";
import { motion } from "framer-motion";

const Formulario: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            await sendContactMessage({ name, email, number, message });
            alert("Mensaje enviado correctamente 🚀");
            setName("");
            setEmail("");
            setNumber("");
            setMessage("");
        } catch (error) {
            console.error("Error en el envío del formulario:", error);
            alert("Hubo un error al enviar el mensaje. Intentá de nuevo.");
        }
    };

    const infoItems = [
        {
            icon: <FaMapMarkerAlt className="icon" />,
            text: "Garay 2524"
        },
        {
            icon: <FaPhoneAlt className="icon" />,
            text: "(0223) 491 3378"
        },
        {
            icon: <FaWhatsapp className="icon" />,
            text: "223 454 0202"
        },
        {
            icon: <FaEnvelope className="icon" />,
            text: "info@penarolmdp.com.ar"
        }
    ];

    return (
        <div className="container">
            {/* Sección del Formulario */}
            <div className="form-container">
                <h1 className="titulo">¡Contáctanos!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nombre"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Correo electrónico"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="WhatsApp"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <textarea
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Déjanos tu mensaje"
                            required
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>

            {/* Sección de Información */}
            <div className="info-container">
                <h2 className="info-title">Nuestra sede</h2>
                {infoItems.map((item, index) => (
                    <motion.div 
                        className="info-item" 
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.3, duration: 0.5 }}
                    >
                        {item.icon}
                        <p>{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Formulario;
