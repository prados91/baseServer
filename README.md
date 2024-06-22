Este es un servidor básico en Express, diseñado para ser un punto de partida para desarrollos más complejos.

## Requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/prados91/baseServer.git
   cd baseServer
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

## Uso

Para iniciar el servidor en un entorno de desarrollo, ejecuta:
```sh
npm run dev
```

Para iniciar el servidor en un entorno de producción (o para utilizar mongoDB), ejecuta:
```sh
npm run prod
```


El servidor estará disponible en `http://localhost:8080` o `http://localhost:8081`.

## Scripts

- `npm run dev`: Inicia el servidor en modo de desarrollo con nodemon.
- `npm run prod`: Inicia el servidor en modo de producción con nodemon.
- `npm start`: Inicia el servidor en modo de producción.

## Estructura del Proyecto

```
baseServer/
├── node_modules/
├── public/
│   ├── assets/
│   ├── scrips/
│   ├── stlyes/
│   └── index.html
├── src/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── docs/
│   ├── dto/
│   ├── middlewares/
│   ├── repositories/
│   ├── routers/
│   ├── services/
│   ├── utils/
│   └── views/
├── test/
│   ├── chai/
│   ├── flow/
│   ├── mocha/
│   └── supertest/
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── server.js
└── utils.js
```
## Contenido del Repositorio

- **public/**: Archivos estáticos servidos al cliente.
- **src/**: Código fuente principal del servidor.
  - **config/**: Configuraciones del servidor y entorno.
  - **controllers/**: Controladores que gestionan las solicitudes y respuestas de las rutas.
  - **data/**: Archivos de datos o mock data utilizados por la aplicación.
  - **docs/**: Documentación adicional del proyecto.
  - **dto/**: Data Transfer Objects para estructurar datos entre capas.
  - **middlewares/**: Middlewares personalizados para el manejo de solicitudes.
  - **repositories/**: Acceso a datos y lógica de persistencia.
  - **routers/**: Definición de las rutas de la API.
  - **services/**: Lógica de negocio y servicios de la aplicación.
  - **utils/**: Funciones utilitarias y helpers.
  - **views/**: Vistas y templates HTML para renderizado en el cliente.
- **test/**: Pruebas unitarias y de integración.
- **server.js**: Punto de entrada principal que inicia el servidor.
- **utils.js**: Funciones utilitarias usadas en el servidor.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request.

