# Centro Médico  

Este proyecto permite gestionar datos de doctores, servicios y agendar citas médicas.  

_________________________________________________________________________

Clonar este repositorio:

git clone https://github.com/tuusuario/centro-medico.git

Navega a la carpeta del proyecto y ejecuta:

npm install

npm start

__________________________________________________________________________

## Características  

- Listado de médicos con detalles de especialidad, experiencia y disponibilidad.  
- Listado de servicios médicos ofrecidos.  
- Formulario para agendar citas médicas.  

## Manejo del DOM Virtual en ReactJS  

React utiliza **DOM Virtual** para optimizar la renderización de componentes. El DOM Virtual es una representación en memoria del DOM real que permite a React realizar actualizaciones más eficientes. Cuando el estado de un componente cambia, React crea un nuevo árbol de DOM Virtual y lo compara con el árbol anterior. Este proceso se llama **reconciliación**.

### Mejoras de rendimiento en la interfaz  
En la aplicación, se pueden ver ejemplos de cómo el uso del DOM Virtual mejora el rendimiento
1. **Listados de doctores y servicios**: Cuando los datos (doctores y servicios) se cargan, las actualizaciones se realizan solo en los elementos que han cambiado.  
2. **Componentes independientes**: Cada componente (como ServiceList y DoctorList) se renderiza de manera independiente.  

## Uso de useEffect  

Se utiliza el hook `useEffect` para cargar los datos de servicios y doctores al mostrar el componente. Este hook garantiza que las funciones de carga de datos solo se ejecuten una vez. Al usar useEffect, se indica que deseas realizar ciertas acciones (como cargar datos) después de que el componente se haya cargado. Al pasar un array vacío [] como segundo argumento, se garantiza que esta función solo se ejecute una vez.

