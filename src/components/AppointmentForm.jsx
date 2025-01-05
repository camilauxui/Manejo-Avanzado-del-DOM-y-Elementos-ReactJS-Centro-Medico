import React, { useState } from 'react';  
import './AppointmentForm.css';   

const AppointmentForm = () => {  
    const [formData, setFormData] = useState({  
        name: '',  
        email: '',  
        phone: '',  
        doctor: '',  
        date: '',  
        time: '',  
    });  

    const [confirmationMessage, setConfirmationMessage] = useState(''); // Estado para el mensaje de confirmación  

    const handleChange = (e) => {  
        const { name, value } = e.target;  
        setFormData({ ...formData, [name]: value });  
    };  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        console.log('Cita agendada:', formData);  

        // Mensaje de confirmación  
        const message = `Nombre del paciente: ${formData.name}. Usted tiene cita con ${formData.doctor} el día ${formData.date} a las ${formData.time}.`;  
        setConfirmationMessage(message); 

        // Resetear el formulario  
        setFormData({  
            name: '',  
            email: '',  
            phone: '',  
            doctor: '',  
            date: '',  
            time: '',  
        });  
    };  

    return (  
        <section id="appointment" className="appointment-form">  
            <h2>Agendar cita médica</h2>  
            <form onSubmit={handleSubmit}>  
                <div>  
                    <label htmlFor="name">Nombre:</label>  
                    <input  
                        type="text"  
                        id="name"  
                        name="name"  
                        value={formData.name}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  
                
                <div>  
                    <label htmlFor="email">Email:</label>  
                    <input  
                        type="email"  
                        id="email"  
                        name="email"  
                        value={formData.email}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  

                <div>  
                    <label htmlFor="phone">Teléfono:</label>  
                    <input  
                        type="tel"  
                        id="phone"  
                        name="phone"  
                        value={formData.phone}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  

                <div>  
                    <label htmlFor="doctor">Doctor:</label>  
                    <select  
                        id="doctor"  
                        name="doctor"  
                        value={formData.doctor}  
                        onChange={handleChange}  
                        required  
                    >  
                        <option value="">Selecciona un doctor</option>  
                        <option value="Dr. Patricio Martínez">Dr. Patricio Martínez</option>  
                        <option value="Dra. Matilde Silva">Dra. Matilde Silva</option>  
                        <option value="Dr. Carlos Andrés Ruiz">Dr. Carlos Andrés Ruiz</option>  
                    </select>  
                </div>  

                <div>  
                    <label htmlFor="date">Fecha:</label>  
                    <input  
                        type="date"  
                        id="date"  
                        name="date"  
                        value={formData.date}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  

                <div>  
                    <label htmlFor="time">Hora:</label>  
                    <input  
                        type="time"  
                        id="time"  
                        name="time"  
                        value={formData.time}  
                        onChange={handleChange}  
                        required  
                    />  
                </div>  

                <button type="submit">Agendar Cita</button>  
            </form>  

            {/* Mostrar mensaje de confirmación */}  
            {confirmationMessage && (  
                <div className="confirmation-message">  
                    <h3>Su hora médica ha sido agendada correctamente</h3>  
                    <p>{confirmationMessage}</p>  
                </div>  
            )}  
        </section>  
    );  
};  

export default AppointmentForm;