# mytinerary-back-CarlosRenePerezGonzalez

Este es el servidor backend para la aplicación web de viajes **MyTinerary**, desarrollado en **Node.js** con **Express.js**, **MongoDB** y otras herramientas. El servidor proporciona API endpoints para la gestión de ciudades y se conecta a una base de datos MongoDB para almacenar información.

## Tecnologías Utilizadas

- **Node.js**: Para el entorno de ejecución.
- **Express.js**: Framework para la creación del servidor web.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar la información de las ciudades.
- **Mongoose**: ODM para interactuar con MongoDB.
- **Dotenv**: Manejo de variables de entorno.
- **CORS**: Para manejar políticas de acceso de otros dominios.
- **Morgan**: Logger de peticiones HTTP en desarrollo.
- **Nodemon**: Herramienta de desarrollo para reiniciar automáticamente el servidor al detectar cambios.


>[!IMPORTANT]
>
>## Requisitos previos
>
>Asegúrate de tener instalados los siguientes programas:
>
>- **Node.js** (v14+)
>- **MongoDB** (puede ser una instancia local o remota)
  
## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/LondoCreed/mytinerary-back-CarlosRenePerezGonzalez.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd mytinerary-back-CarlosRenePerezGonzalez
   ```

3. Instala las dependencias:

   ```bash
   npm install express mongoose dotenv
   npm install --save-dev nodemon

   {si no funciona por alguna razon puedes probar a usar 
   npm install}
   ```
>[!CAUTION]
>4. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:
>
>    ```bash
>    PORT=8080
>    URI_MONGO="tu_uri_de_mongo"
>    ```

>[!IMPORTANT]
> Asegúrate de que MongoDB esté corriendo localmente o que la URL de la base de datos remota esté correctamente configurada antes de ejecutar el proyecto.
>

5. Inicia el servidor en modo desarrollo:

   ```bash
   npm run dev
   ```

   O bien, para iniciar el servidor en modo producción:

   ```bash
   npm start
   ```
>[!NOTE]
>## Endpoints
>
>### Tiendas
>
>- **GET /api/cities**: Obtiene la lista completa de ciudades.
>- **GET /api/cities/id/:id**: Obtiene una ciudad específica por su ID.
>- **POST /api/cities/create**: Crea una nueva ciudad en la base de datos.

>[!WARNING]
>Las siguientes modificaran las bases de datos existentes, por lo que debes tener cuidado antes de ejecutar los comandos.
>## Scripts de datos
>
>Para insertar datos de prueba en tu base de datos, puedes usar los siguientes comandos:
>
>- **Insertar data**:
>     ```bash
>     npm insertDataCities
>     ```

>[!NOTE]
>## Contribución
>
>Si deseas contribuir a este proyecto, por favor sigue estos pasos:
>
>1. Haz un fork del repositorio.
>2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
>3. Realiza los cambios y confirma los commits (`git commit -m 'Agrega nueva funcionalidad'`).
>4. Envía un push a la rama (`git push origin feature/nueva-funcionalidad`).
>5. Crea un Pull Request.

## Licencia

Este proyecto está bajo la licencia ISC.