# Desarrollo de Aplicaciones Web 
# Laboratorio 03 - Introducción a JavaScript

Este script es parte del **Laboratorio 03** de la materia de Introducción a JavaScript. Los objetivos son aplicar conceptos básicos como variables, funciones, operadores lógicos y salida por consola.

---

## Sección 1: Creación de una Contraseña (Inspirado en la Página de Netflix)

Esta sección simula una validación simple de una contraseña, como las usadas en los formularios de inicio de sesión de plataformas como Netflix.

### Variables Utilizadas

- `email`: Cadena de texto que almacena una dirección de correo.
- `password`: Cadena de texto que almacena una contraseña provisional.

### Función Implementada

```js
const validarPassword = (password) => {
    password.trim().length < 6 || password.trim().length > 60 
    ? console.log("La contraseña debe tener entre 6 y 60 caracteres.")
    : console.log("Contraseña válida");
};
```
**Propósito**: Verifica que la longitud de la contraseña esté entre 6 y 60 caracteres (excluyendo espacios en blanco al inicio y final).

**Llamada**
```js
validarPassword(password);
```

## Sección 2: Presentación de un Producto (Inspirado en la Página de Mercado Libre)

Esta parte del código presenta un producto usando interpolación de cadenas y simula cómo se mostraría la descripción de un artículo.

### Variables del Producto
- `nombreProducto`: Nombre del artículo.

- `ram`: Memoria RAM del dispositivo.

- `almacenamiento`: Capacidad de almacenamiento.

- `color`: Color del producto.

- `precioProducto`: Precio en dólares.

- `estadoProducto`: Estado del artículo (Nuevo, Usado, etc).

### Ejemplo de Salida
```bash
El teléfono Honor X7c Alt-lx3 tiene 8 GB de RAM, 256 GB de almacenamiento, es de color Verde Foresta, cuesta $289.99 y está en estado Nuevo.
```

## Requisitos Previos
Tener instalado un entorno que ejecute JavaScript (por ejemplo: Node.js o navegador web con consola).

Conocimientos básicos de programación en JavaScript.

## Ejecución
  1. Copia el código en un archivo .js.

  2. Ejecuta el script en la consola de tu navegador o mediante Node.js:

  ```bash
  node nombre-del-archivo.js
  ```

## Autor 📧
Desarrollador: @jmvillanueva-dev

Correo: jhonny.villanueva@epn.edu.ec
