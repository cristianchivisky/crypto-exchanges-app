# Aplicación de Exchanges de Criptomonedas

Esta aplicación móvil desarrollada en **React Native** consume la API REST de **CoinAPI** para mostrar información sobre exchanges de criptomonedas. Permite a los usuarios buscar y ordenar exchanges, así como ver detalles sobre su volumen de transacciones en tiempo real.

## Características

- **Visualización de Exchanges:** Muestra una lista de exchanges de criptomonedas con detalles sobre el volumen de transacciones.
- **Búsqueda y Ordenación:** Permite buscar exchanges por nombre y ordenarlos alfabéticamente.
- **Indicador de Carga:** Muestra un indicador de carga animado mientras se obtienen los datos.
- **Manejo de Errores:** Muestra un mensaje de error con opción para reintentar si la carga falla.
- **Botón de Desplazamiento:** Un botón para desplazarse rápidamente hacia arriba en la lista.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema antes de empezar:

- **Node.js** 
- **npm** 
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
   EXPO_PUBLIC_COIN_API_KEY=tu_clave_api
   ```

2. **Inicia la aplicación:**

   ```bash
    npm run start
   ```

Podrás ejecutar la aplicación en un emulador o en un dispositivo físico usando la aplicación Expo Go.

## Contribuir

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, sigue estos pasos:

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

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de [cristian.chivisky@gmail.com](mailto:cristian.chivisky@gmail.com)