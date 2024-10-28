# Aplicación de Gestión de Fondos de Inversión

Aplicación de Angular para la gestión de fondos de inversión, donde los clientes pueden abrir y cancelar fondos, consultar su historial de transacciones y recibir notificaciones. Esta aplicación se conecta a un backend en Java Spring Boot para la persistencia de datos y la lógica de negocio.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)

---

## Características

- **Apertura de Fondos:** Permite a los usuarios abrir un fondo si cumplen con los requisitos de saldo.
- **Cancelación de Fondos:** Facilita la cancelación de suscripciones a fondos, con mensajes de confirmación y validaciones.
- **Historial de Transacciones:** Muestra un historial completo de las transacciones de fondos.
- **Notificaciones:** Opción de notificación vía SMS o correo electrónico al abrir o cancelar fondos.
- **Interfaz de Usuario:** Diseño intuitivo y moderno implementado en Angular.

## Tecnologías

- **Frontend:** Angular, TypeScript, Bootstrap, SweetAlert2 (para alertas)
- **Backend:** Java Spring Boot
- **Servicios de API:** Implementación de RESTful API
- **Base de Datos:** Oracle (configurable en el backend)

## Requisitos

- **Node.js** (v14 o superior)
- **Angular CLI** (v12 o superior)
- **Java JDK** (v11 o superior)
- **Servidor Oracle** (o base de datos compatible)
- **Backend:** [Repositorio del Backend](https://github.com/usuario/backend-repo)

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/Guillermo1994/FondosBTG-App
   cd fondosBTG-App
   ```
2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
3. Asegúrate de tener el backend en Java Spring Boot configurado y en ejecución.

## Configuración

1. Backend URL Global: En el archivo src/environments/environment.ts, configura la URL base del backend.

   apiUrl: 'http://localhost:8080'

2. Integración con Backend: Asegúrate de que los servicios de API coincidan con las rutas configuradas en el backend de Java Spring Boot.

## Uso

1. Ejecutar la aplicación en modo desarrollo:

   ```bash
   ng serve
   ```

2. Acceder a la aplicación: Abre tu navegador y navega a http://localhost:4200.

3. Funciones Disponibles:

- Apertura de Fondos: Navega a la sección de apertura de fondos y selecciona un fondo.
- Cancelación de Fondos: Visualiza el historial de fondos y utiliza la opción de cancelación.
- Notificaciones: Configura el canal de notificación en la apertura de un fondo.
