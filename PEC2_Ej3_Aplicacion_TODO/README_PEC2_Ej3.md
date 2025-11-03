# PEC2 - Ejercicio 3: Aplicación TODO en TypeScript

Esta aplicación TODO ha sido transformada de JavaScript a TypeScript siguiendo el patrón de arquitectura MVC. El proyecto está dividido en:
- Modelos (src/models/): define la estructura de los datos.
- Servicios (src/services/): gestiona la lógica de negocio.
- Vistas (src/views/): controla la interacción con el DOM.
- Controladores (src/controllers/): conecta la vista con el servicio.
- Lanzador (src/app.ts): punto de entrada de la aplicación.

## Requisitos previos

- Tener instalado Node.js
- Ejecutar 'npm install' para instalar las dependencias

## Comandos para compilar y ejecutar

- 'npm run build' para compilar los archivos .ts dentro de src/ y generar los .js correspondientes en la carpeta dist/
- Abrir index.html en el navegador

## Uso de Webpack

- 'npm install --save-dev webpack webpack-cliwebpack-dev-server ts-loader html-webpack-plugin' para instalar dependencias.
- webpack.config.js compila desde src/app.ts, genera dist/bundle.js, inyecta automáticamente el script en index.html y ejecuta un servidor local en http://localhost:8080.
- 'npx webpack' para compilar el proyecto
- 'npx webpack serve' para abrir la aplicación en http://localhost:8080 con recarga automática.

