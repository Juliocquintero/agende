## Instalación de la aplicación

Para la instalación de la aplicación, es necesario hacer un gitClone a este repositorio, creando una nueva carpeta, dentro de ella ejecutar la siguiente línea de comandos en una terminal (preferiblemente gitBash).

`git clone https://github.com/Juliocquintero/TEST-AgendaPro.git`

Esperamos que se descarguen los archivos de la aplicación. Una vez terminada la descarga, ejecutamos la siguiente línea de comandos:

`cd TEST-AgendaPro`

Ya tendríamos en nuestra carpeta los archivos de la aplicación, sin embargo, faltarán una serie de dependencias que nos permitirán el despliegue de la aplicación, para ello, tendremos que Instalar las siguientes dependencias:

#### React:

`npm install @testing-library/jest-dom@5.14.1 @testing-library/react@11.2.7 @testing-library/user-event@12.8.3 react@17.0.2 react-dom@17.0.2 react-scripts@4.0.3 web-vitals@1.1.2`

#### Redux:

`npm install --save-dev react-redux@7.2.4 redux@4.1.1`

#### Json-Server:

`npm install --save-dev json-server`

## Ejecución de la Aplicación

Para la prueba de la aplicación, es necesario ejecutar la siguiente línea de comandos en la terminal:

`npm start` o `npm run start`

Una vez se ejecute, el mismo desplegará en su navegador predeterminado.

Debido al problema de acceso al API, se creó una API local con Json server, para iniciarla, es necesario que ejecuten el siguiente código en la terminal:
`npm run api`
