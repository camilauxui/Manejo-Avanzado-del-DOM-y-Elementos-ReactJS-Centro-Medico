import React from 'react';  
import PropTypes from 'prop-types';  // Importar PropTypes  
import './ServiceList.css';   

const ServiceList = ({ services }) => {  
    return (  
        <section id="services" className="section-services">  
            <h2>Servicios Médicos</h2>  
            <p>  
                Conoce todos los servicios disponibles para garantizar una atención de calidad:  
            </p>  
            <br /><br />  
            <div className="services-grid">  
                {services.map((service) => (  
                    <article className="services-item" key={service.id}>  
                        <img  
                            src={service.image}   
                            alt={service.title}  
                            className="responsive-img"  
                        />  
                        <h3>{service.title}</h3>  
                        <p>{service.description}</p>  
                    </article>  
                ))}  
            </div>  
        </section>  
    );  
};  

ServiceList.propTypes = {  
    services: PropTypes.arrayOf(  
        PropTypes.shape({  
            id: PropTypes.number.isRequired,  
            title: PropTypes.string.isRequired,  
            description: PropTypes.string.isRequired,  
            image: PropTypes.string.isRequired  
        })  
    ).isRequired  
};  

export default ServiceList;