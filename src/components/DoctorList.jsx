import React from 'react';  
import DoctorCard from './DoctorCard';  

const DoctorList = ({ doctors }) => {  
    return (  
        <div className="doctor-cards-container">  
            {doctors.map((doctor) => (  
                <DoctorCard   
                    key={doctor.id}  
                    name={doctor.name}  
                    specialty={doctor.specialty}  
                    experience={doctor.experience}  
                    availability={doctor.availability}  
                    contact={doctor.contact}  
                    schedule={doctor.schedule}  
                    image={doctor.image}  
                />  
            ))}  
        </div>  
    );  
};  

export default DoctorList;