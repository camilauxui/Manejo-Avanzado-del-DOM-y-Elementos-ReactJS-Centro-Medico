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

## 1 - Manejo del DOM Virtual en ReactJS  

React utiliza **DOM Virtual** para optimizar la renderización de componentes. El DOM Virtual es una representación en memoria del DOM real que permite a React realizar actualizaciones más eficientes. Cuando el estado de un componente cambia, React crea un nuevo árbol de DOM Virtual y lo compara con el árbol anterior. Este proceso se llama **reconciliación**.

### Mejoras de rendimiento en la interfaz  
En la aplicación, se pueden ver ejemplos de cómo el uso del DOM Virtual mejora el rendimiento
1. **Listados de doctores y servicios**: Cuando los datos (doctores y servicios) se cargan, las actualizaciones se realizan solo en los elementos que han cambiado.  
2. **Componentes independientes**: Cada componente (como ServiceList y DoctorList) se renderiza de manera independiente.  

## Uso de useEffect  

Se utiliza el hook `useEffect` para cargar los datos de servicios y doctores al mostrar el componente. Este hook garantiza que las funciones de carga de datos solo se ejecuten una vez. Al usar useEffect, se indica que deseas realizar ciertas acciones (como cargar datos) después de que el componente se haya cargado. Al pasar un array vacío [] como segundo argumento, se garantiza que esta función solo se ejecute una vez.

## 2 - Creación y Uso de Referencias en React  
**Explicación de las modificaciones:**
Importación de useRef: Se importa useRef para crear referencias.

**Creación de la referencia:** Se crea un useRef llamado nameInputRef que se utilizará para el campo de nombre.

**Uso de la referencia:** Se asigna ref={nameInputRef} al campo de entrada del nombre.

**Enfoque del campo:** En useEffect, al montar el componente, se llama a nameInputRef.current.focus() para colocar el foco en el campo de nombre.

## 3. Uso de Fragmentos y Contexto en ReactJS

## 4. Verificación de Tipos con PropTypes
DoctorCard: Ya tiene PropTypes implementado correctamente.
ServiceList: Se agregó PropTypes para validar que services sea un arreglo de objetos con propiedades específicas.

## 5. Uso de Componentes de Orden Superior y Portales
**Eliminación del Estado Local en el Formulario:** Se eliminó el estado local de formData, confirmationMessage y setFormData, ya que ahora son manejados por el HOC withForm.

El componente ahora utiliza las props formData, errorMessage, confirmationMessage, handleChange y handleSubmit que son proporcionadas por el HOC.

La función onSubmit se pasa a handleSubmit, que es responsable de validar y procesar el envío del formulario.

**Manejo de Mensajes de Error y Confirmación:**
Se agregaron secciones para mostrar mensajes de error y confirmación, que ahora son gestionados por el HOC.

**Crea un portal para renderizar un modal**
Al hacer clic en el botòn ver màs en cada servicio , se abre un modal en una capa superior sin interferir con la estructura del DOM principal

## 6. Optimización de Rendimiento y Profiler en ReactJS
Podrás ver en la consola del navegador los tiempos de renderización de DoctorList e identificar si hay cuellos de botella cuando se renderizan muchos doctores.