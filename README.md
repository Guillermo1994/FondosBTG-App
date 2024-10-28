# Aplicaci�n de Gesti�n de Fondos de Inversi�n

Aplicaci�n de Angular para la gesti�n de fondos de inversi�n, donde los clientes pueden abrir y cancelar fondos, consultar su historial de transacciones y recibir notificaciones. Esta aplicaci�n se conecta a un backend en Java Spring Boot para la persistencia de datos y la l�gica de negocio.

## Tabla de Contenidos

- [Caracter�sticas](#caracter�sticas)
- [Tecnolog�as](#tecnolog�as)
- [Requisitos](#requisitos)
- [Instalaci�n](#instalaci�n)
- [Configuraci�n](#configuraci�n)
- [Uso](#uso)

---

## Caracter�sticas

- **Apertura de Fondos:** Permite a los usuarios abrir un fondo si cumplen con los requisitos de saldo.
- **Cancelaci�n de Fondos:** Facilita la cancelaci�n de suscripciones a fondos, con mensajes de confirmaci�n y validaciones.
- **Historial de Transacciones:** Muestra un historial completo de las transacciones de fondos.
- **Notificaciones:** Opci�n de notificaci�n v�a SMS o correo electr�nico al abrir o cancelar fondos.
- **Interfaz de Usuario:** Dise�o intuitivo y moderno implementado en Angular.

## Tecnolog�as

- **Frontend:** Angular, TypeScript, Bootstrap, SweetAlert2 (para alertas)
- **Backend:** Java Spring Boot
- **Servicios de API:** Implementaci�n de RESTful API
- **Base de Datos:** Oracle (configurable en el backend)

## Requisitos

- **Node.js** (v14 o superior)
- **Angular CLI** (v12 o superior)
- **Java JDK** (v11 o superior)
- **Servidor Oracle** (o base de datos compatible)
- **Backend:** [Repositorio del Backend](https://github.com/usuario/backend-repo)

## Instalaci�n

1. Clona este repositorio en tu m�quina local:
   ```bash
   git clone https://github.com/Guillermo1994/FondosBTG-App
   cd fondosBTG-App
   ```
2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
3. Aseg�rate de tener el backend en Java Spring Boot configurado y en ejecuci�n.

## Configuraci�n

1. Backend URL Global: En el archivo src/environments/environment.ts, configura la URL base del backend.

   apiUrl: 'http://localhost:8080'

2. Integraci�n con Backend: Aseg�rate de que los servicios de API coincidan con las rutas configuradas en el backend de Java Spring Boot.

## Uso

1. Ejecutar la aplicaci�n en modo desarrollo:

   ```bash
   ng serve
   ```

2. Acceder a la aplicaci�n: Abre tu navegador y navega a http://localhost:4200.

3. Funciones Disponibles:

- Apertura de Fondos: Navega a la secci�n de apertura de fondos y selecciona un fondo.
- Cancelaci�n de Fondos: Visualiza el historial de fondos y utiliza la opci�n de cancelaci�n.
- Notificaciones: Configura el canal de notificaci�n en la apertura de un fondo.
