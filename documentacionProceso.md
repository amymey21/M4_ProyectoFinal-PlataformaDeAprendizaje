# M4_ProyectoFinal-PlataformaDeAprendizaje

Proyecto final del módulo 4 – Plataforma de Aprendizaje en JavaScript

# M4 Proyecto Final - Plataforma de Aprendizaje

## Lección 1

- Se creó la estructura inicial del proyecto con carpeta `assets` que contiene `js`, `css` e `img`.
- Se conectó el archivo `index.js` al `index.html`.
- Se practicó el uso de `console.log` para mostrar mensajes en la consola.
- Se implementó `prompt()` y `alert()` para interactuar con el usuario.
- Se registró el avance en GitHub con commits en la rama `main`.

## Lección 2

- Se trabajó con variables y operaciones básicas (+,-,\*,/).
- Se implementaron estructuras _condicionales_ (if, else, switch) para evaluar diferentes situaciones.
- Se validó la división por cero con un mensaje de error.
  Se integró todo en una aplicación de consola activada bajo demanda mediante un botón en el HTML.
- Los resultados se muestran tanto en la consola como en alertas.

## Lección 3

- Se creó un _array historial_ para almacenar los resultados de las operaciones.
- Se recorrió el historial utilizando ciclos for y while.
- Se implementó una función de filtrado (filtrarMayoresQue) para seleccionar resultados mayores a un valor específico.
- Se integró todo en la calculadora, mostrando el historial y los resultados filtrados en consola.
- Se guardó el avance en GitHub en el bhanch lección-3

## Lección 4

- Se modularizó la calculadora creando funciones específicas para cada operación matemática (`sumar`, `restar`, `multiplicar`, `dividir`).
- Se implementó una función principal (`calcularOperacion`) que recibe parámetros y retorna resultados, llamando internamente a las funciones matemáticas.
- Se mantuvo la integración con el historial de operaciones y la función de filtrado de la Lección 3.
- Se conservaron las versiones anteriores comentadas en el archivo `index.js` como documentación del progreso.
- Se guardó el avance en GitHub en el branch `lección-4`.

## Lección 5

- Se implementó la calculadora con un ciclo while que permite realizar múltiples operaciones hasta que el usuario decida detenerse.
- Se añadieron controles para manejar la cancelación en los prompt(), evitando bucles infinitos.
- Se reutilizó las funciones matemáticas (sumar, restar, multiplicar, dividir) para calcular y registrar los pasos de cada operación.
- Se integró un historial narrativo por estudiante en el objeto resultadosEstudiantes, guardando las operaciones realizadas en formato matemático.
- Se amplió la lógica del cuestionario: cada problema incluye su respuesta correcta, historial de intentos y cantidad ideal de operaciones, con reglas de puntaje (+10, -5, +2, -1).
- Se mantuvo la documentación del proceso en el código mediante comentarios y se registró el avance en GitHub en el branch lección-5.

---

Este repositorio documenta mi progreso en el Módulo 4, integrando buenas prácticas de estructura, JavaScript y control de versiones con Git y GitHub.
