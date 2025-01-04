# Componentes_Basicos_ReactJS

## 1- Desarrollo de Componentes Básicos con ReactJS para el Proyecto del Hospital 

# 1-Componente DoctorCard
Muestra información detallada sobre un médico.

## Props  

Este componente muestra las siguientes propiedades:  

- **`name`** *(string)*: Nombre del doctor.  
- **`specialty`** *(string)*: Especialidad médica del doctor.  
- **`experience`** *(number)*: Años de experiencia del doctor.  
- **`availability`** *(string)*: Días y horas de disponibilidad.  
- **`contact`** *(object)*: Información de contacto del doctor, que incluye:  
  - **`telefono`** *(string)*: Número de teléfono del doctor.  
  - **`email`** *(string)*: Correo electrónico del doctor.  
- **`schedule`** *(object)*: Horarios de atención organizados por días.  
- **`image`** *(string)*: Ruta de la imagen del doctor.
 

## Estilo
El componente utiliza el archivo DoctorCard.css para aplicar estilos.

## Validación
Utiliza "PropTypes" para validar que se entregue la información.

# 2 Componente DoctorList
Agrupa todas las cards de los doctores 

# 3 Componente ServiceList
Contiene la secciòn Servicios médicos. 