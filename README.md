# PEC2 Frontend con java

## Autor

- **Login UOC**: lcunado@uoc.edu
- **Nombre y apellidos**: Laura Cuñado García

---

## Contenido

Esta PEC consta de tres ejercicios desarrollados en TypeScript:
1. **Primeros códigos en TypeScript**  
   Ejercicios introductorios para familiarizarse con la sintaxis.
2. **Práctica TypeScript**  
   Resolución de problemas prácticos aplicando tipado, funciones, clases, etc.
3. **Aplicación TODO con arquitectura MVC**  
   Desarrollo completo de una aplicación de tareas (TODO) utilizando TypeScript y el patrón MVC. Se han implementado las siguientes capas:

   - **Modelo**: clase `Todo` con interfaz `ITodo`.
   - **Servicio**: clase `TodoService` que gestiona la lógica de negocio.
   - **Vista**: clase `TodoView` que controla la interacción con el DOM.
   - **Controlador**: clase `TodoController` que conecta la vista con el servicio.
   - **Webpack**: configuración para compilar toda la aplicación en un único `bundle.js`.

---

## Dificultades encontradas

- Adaptar el proyecto para que funcione correctamente en el navegador y no en Node.js (por el uso de `localStorage`).
- Configurar Webpack para que compile correctamente los módulos ES y genere un único archivo.
- Asegurar que los scripts se inyecten automáticamente en el HTML sin romper la estructura del proyecto.

---

## Mejoras realizadas

- Se ha modularizado el código siguiendo buenas prácticas de separación de responsabilidades.
- Se ha añadido una interfaz `ITodo` para reforzar el tipado.
- Se ha configurado Webpack con `HtmlWebpackPlugin` para generar automáticamente el HTML con el script incluido.
- Se ha documentado el proyecto con dos archivos `README.md`.

---

## Aspectos a tener en cuenta para la corrección

- La aplicación debe ejecutarse en el navegador, no con `npm start`, ya que utiliza `localStorage` y manipulación del DOM.
- Para compilar y ejecutar correctamente, se recomienda usar Webpack:
  - Ejecutar `npm install`
  - Ejecutar `npx webpack`
  - Abrir `dist/index.html` en el navegador

---

## Comentario final

Esta práctica ha sido una oportunidad para aplicar TypeScript en un proyecto real, reforzar la arquitectura MVC y aprender a configurar herramientas modernas como Webpack. 







