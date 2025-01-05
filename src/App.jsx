import React, { useEffect, useState } from 'react';  
import ServiceList from './components/ServiceList';   
import DoctorList from './components/DoctorList';   
import AppointmentForm from './components/AppointmentForm';  
import consultaIcono from './assets/consulta_icono.png';  
import urgenciaIcono from './assets/urgencia_icono.png';  
import especialidadesIcono from './assets/especialidades_icono.png';  
import pMartinezImage from './assets/doc1.jpg'; // Imagen de Dr. Patricio Martínez  
import mSilvaImage from './assets/dra1.jpg'; // Imagen de Dra. Matilde Silva  
import carlosImage from './assets/doc2.jpg'; // Imagen de Dr. Carlos Andrés Ruiz 

// Datos de doctores simulados  
const doctorsData = [  
    {  
        id: 1,  
        name: "Dr. Patricio Martínez",  
        specialty: "Cardiología",  
        experience: 4,  
        availability: "Lunes y viernes",  
        contact: {  
            telefono: "123-456-7890",  
            email: "p.martinez@centromedico.com"  
        },  
        schedule: {  
            lunes: "9:00 AM - 3:00 PM",  
            viernes: "10:00 AM - 1:00 PM"  
        },  
        image: pMartinezImage 
    },  
    {  
        id: 2,  
        name: "Dra. Matilde Silva",  
        specialty: "Pediatría",  
        experience: 3,  
        availability: "Martes y sábado",  
        contact: {  
            telefono: "+56 9 98765432",  
            email: "m.silva@centromedico.com"  
        },  
        schedule: {  
            martes: "09:00 - 13:00",  
            sabado: "09:00 - 12:00"  
        },  
        image: mSilvaImage
    },  
    {  
        id: 3,  
        name: "Dr. Carlos Andrés Ruiz",  
        specialty: "Neurología",  
        experience: 26,  
        availability: "Lunes y jueves",  
        contact: {  
            telefono: "+56 9 13579135",  
            email: "c.ruiz@centromedico.com"  
        },  
        schedule: {  
            lunes: "08:00 - 12:00",   
            jueves: "14:00 - 18:00"  
        },  
        image: carlosImage  
    }  
];  

function App() {  
    const [services, setServices] = useState([]);  
    const [doctors, setDoctors] = useState([]);  

    useEffect(() => {  
        // Cargar servicios estáticos  
        const loadServices = () => {  
            const servicesData = [  
                {  
                    title: "Consultas",  
                    description: "Nuestro equipo de profesionales capacitados está disponible para proporcionar atención médica rápida y efectiva.",  
                    image: consultaIcono  
                },  
                {  
                    title: "Urgencias",  
                    description: "Nuestra unidad de urgencias está diseñada para atender situaciones médicas críticas.",  
                    image: urgenciaIcono  
                },  
                {  
                    title: "Especialidades",  
                    description: "Contamos con un equipo de especialistas en diferentes áreas incluyendo cardiología, pediatría, entre otros.",  
                    image: especialidadesIcono  
                }  
            ];  
            setServices(servicesData);  
        };  

        // Cargar doctores simulados  
        const loadDoctors = () => {  
            setDoctors(doctorsData);  
        };  

        loadServices();  
        loadDoctors();  
    }, []); // Solo se ejecuta una vez al montar el componente  

    return (  
        <>  
            <h1>Centro Médico</h1>  
            <br />  
            <div>  
                <ServiceList services={services} />   
            </div>  
            <br />  
            <div>  
                <DoctorList doctors={doctors} />  
            </div>  
            <br />  
            <AppointmentForm />  
        </>  
    );  
}  

export default App;