# 🎁 Amigo Secreto – Challenge de Lógica de Programación

Este proyecto es una pequeña aplicación desarrollada como parte de un **challenge de lógica de programación**, cuyo objetivo era aplicar los fundamentos de JavaScript para crear la lógica de un **juego de amigo secreto** en el navegador.

## 📌 Descripción

La aplicación permite a los usuarios ingresar una lista de nombres y luego realizar un sorteo aleatorio para determinar quién será el "amigo secreto". Todo el proyecto fue desarrollado en **JavaScript puro (vanilla JS)** y se integra con una interfaz HTML/CSS previamente proporcionada.

## ⚙️ Funcionalidades

✅ **Agregar nombres**:  
Los usuarios pueden escribir el nombre de un amigo y añadirlo a la lista presionando el botón **"Añadir"**.

✅ **Validar entrada**:  
Si el campo está vacío, se muestra un mensaje de advertencia pidiendo un nombre válido.

✅ **Visualizar lista**:  
Los nombres ingresados se muestran en una lista visible dentro de la página.

✅ **Sortear Amigo Secreto**:  
Al presionar el botón **"Sortear Amigo"**, se elige aleatoriamente un nombre de la lista y se muestra en pantalla.

## 📂 Estructura del proyecto

```
/amigo-secreto/
├── index.html          // Estructura principal de la interfaz
├── style.css           // Estilos visuales (proporcionado)
├── app.js              // Lógica en JavaScript (desarrollada)
├── assets/             // Imágenes del proyecto (proporcionadas)
└── README.md           // Este archivo
```

## 🧠 Lógica implementada (JavaScript)

- Se utiliza un **array** para almacenar los nombres ingresados.
- La función `agregarAmigo()` valida la entrada y actualiza la lista.
- `mostrarListaAmigos()` muestra cada nombre en una nueva línea usando HTML dinámico.
- `sortearAmigo()` realiza un sorteo aleatorio con `Math.random()` y muestra el resultado.
- Se emplea una función auxiliar `ingresarDatos()` para actualizar el contenido del DOM de forma reutilizable.

## 🎮 Como jugarlo 
1. Abre el link de la pagina con el juego
```bash
   https://mind0t.github.io/challenge-amigo-secreto_esp-main/
```
2. Comienza a agregar nombres y luego ¡haz clic en **Sortear Amigo** para ver el resultado!
   
3. Puedes compartir el link y probarlo desde cualquier dispositivo
   
## 🚀 Cómo ver código y probarlo.

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Mind0T/challenge-amigo-secreto_esp-main.git
   ```
2. Abre el archivo `index.html` en tu navegador.

3. Comienza a agregar nombres y luego ¡haz clic en **Sortear Amigo** para ver el resultado!

## 💡 Posibles mejoras futuras

- Evitar nombres duplicados.
- Agregar la funcionalidad de que cada persona tenga un amigo secreto distinto (parejas secretas).
- Opción para reiniciar la lista.
- Almacenar datos en `localStorage` para mantener la información tras recargar la página.

## 🧑‍💻 Autor

**Irvin Soriano**  
Estudiante de Ingeniería en Inteligencia Artificial  
Apasionado por la programación, el desarrollo web y los retos que combinan lógica con creatividad.
