Plataforma de Aprendizaje Interactivo

# 📘 Descripción

Esta aplicación es una plataforma de aprendizaje interactivo desarrollada en JavaScript, HTML y CSS.
Permite al usuario practicar operaciones matemáticas mediante una calculadora básica y responder un cuestionario con problemas narrativos.
El sistema evalúa las respuestas, calcula un puntaje según reglas definidas y guarda un historial de operaciones por estudiante.

# 🚀 Cómo usar la aplicación

## Abrir en navegador

- Descarga el proyecto y abre el archivo index.html en cualquier navegador moderno.

## Usar la calculadora

- Haz clic en el botón “Usar la calculadora”.
- Ingresa los números y el símbolo de la operación (+, -, \*, /).
- El resultado se mostrará en pantalla y se guardará en el historial narrativo.
- Puedes realizar varias operaciones seguidas; al cancelar, el ciclo se detiene.

## Responder el cuestionario

- Completa los campos numéricos de cada problema.
- Haz clic en “Revisar” para obtener tu puntaje.
- El sistema mostrará el resultado en pantalla y registrará las operaciones en consola.

## 🛠️ Tecnologías utilizadas

- HTML5: estructura de la aplicación y formulario del cuestionario.
- CSS3: estilos visuales con paleta pastel, botones interactivos y diseño responsivo.
- JavaScript (ES6): lógica de la calculadora, funciones matemáticas, objetos de problemas, historial narrativo y evaluación del cuestionario.

📂 Estructura del código

- index.html
  Contiene la interfaz principal: título, instrucciones, botón de calculadora y formulario del cuestionario.
- style.css
  Define los estilos visuales: colores pastel, botones, inputs y recuadros de resultados.
- index.js
  Incluye la lógica:
  - Funciones matemáticas (sumar, restar, multiplicar, dividir).
  - Función calcularOperacion para mostrar resultados.
  - Ciclo while que controla la calculadora y guarda operaciones en el historial.
  - Objeto problemas con respuestas correctas, historial y cantidad ideal de operaciones.
  - Función evaluarCuestionario que calcula puntaje y muestra resultados.
