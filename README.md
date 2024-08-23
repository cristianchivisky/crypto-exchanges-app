# Aplicación de Exchanges de Criptomonedas

Esta aplicación móvil desarrollada en **React Native** consume la API REST de **CoinAPI** para mostrar información sobre exchanges de criptomonedas. Permite visualizar el volumen de transacciones en los principales exchanges en tiempo real.

## Características

- Visualización en tiempo real del volumen de transacciones en diferentes exchanges.
- Interfaz moderna y atractiva, diseñada para una experiencia de usuario fluida.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema antes de empezar:

- **Node.js** (versión 20 o superior)
- **npm** o **yarn** (gestor de paquetes)
- **CoinAPI** key (obtén una clave API desde [CoinAPI](https://www.coinapi.io/))

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/cristianchivisky/crypto-exchanges-app.git
   ```

2. **Cambia de directorio:**

   ```bash
   cd crypto-exchanges-app
   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   ```

4. **Configura tu clave API de CoinAPI:**

   Crea un archivo **.env** en la raíz del proyecto y añade tu clave API:

   ```bash
   COIN_API_KEY=tu_clave_api
   ```

2. **Inicia la aplicación:**

   ```bash
    npm run start
   ```

Esto abrirá Expo Developer Tools en tu navegador. Desde aquí, puedes correr la app en un simulador o dispositivo físico.

## Contribuir

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.

2. Crea una nueva rama:

   ```bash
   git checkout -b feature/nueva-caracteristica
   ```

3. Realiza los cambios necesarios y haz un commit

   ```bash
   git commit -m 'Añadir nueva característica'
   ```

4. Sube los cambios a tu fork:

   ```bash
   git push origin feature/nueva-caracteristica
   ```

5. Abre un Pull Request.


## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo **LICENSE** para obtener más información.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de [cristianchivisky@gmail.com](mailto:cristianchivisky@gmail.com)