// ------------------------ LECCIÓN 1 - Primer script de JavaScript

// Mensajes de consola
console.log("Esta es la calculadora más básica del mundo.");
console.log("¡Puedes probar sus funciones!");

// Interacción con el usuario
let nombre = prompt("¿Cuál es tu nombre?");
alert("¡" + nombre + ", Me alegra tenerte por aquí!");

/* ------------------------ LECCIÓN 2 - Variables, expresiones y sentencias condicionales

--------------------------- Código reemplazado en lección 3
Función de operaciones
document
  .getElementById("initBtn")
  .addEventListener("click", function calcular() {
    // Variables
    const num1 = parseFloat(prompt("Ingresa un número:"));
    const op = prompt("Ingresa la el símbolo de la operación:(+, -, *, /)");
    const num2 = parseFloat(prompt("Ingresa otro número:"));

    let resultado;
    switch (op) {
      case "+":
        resultado = "La suma es: " + (num1 + num2);
        break;
      case "-":
        resultado = "La resta es: " + (num1 - num2);
        break;
      case "*":
        resultado = "La multiplicación es: " + num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          alert("Error:No puedes dividir por cero.");
        } else {
          resultado = "La división es: " + num1 / num2;
        }
        break;
      default:
        alert("Operación no válida. Por favor, ingresa +, -, *, o /.");
    }
    if (resultado !== undefined) {
      console.log(resultado);
      alert(resultado);
    }
  });
*/

// ------------------------ LECCIÓN 3 - Arreglos y cliclos

// Array historial de operaciones
const historial = [];

/* Modificación de la calculadora para almacenar el historial y recorrerlo con ciclos FOR y WHILE
--------------------------- Código reemplazado en lección 4
document
  .getElementById("initBtn")
  .addEventListener("click", function calcular() {
    // Variables
    const num1 = parseFloat(prompt("Ingresa un número:"));
    const op = prompt("Ingresa la el símbolo de la operación:(+, -, *, /)");
    const num2 = parseFloat(prompt("Ingresa otro número:"));

    let resultado;
    switch (op) {
      case "+":
        resultado = "La suma es: " + (num1 + num2);
        break;
      case "-":
        resultado = "La resta es: " + (num1 - num2);
        break;
      case "*":
        resultado = `La multiplicación es: ${num1 * num2}`;
        break;
      case "/":
        if (num2 === 0) {
          alert("Error:No puedes dividir por cero.");
        } else {
          resultado = `La división es: ${num1 / num2}`;
        }
        break;
      default:
        alert("Operación no válida. Por favor, ingresa +, -, *, o /.");
    }
    if (resultado !== undefined) {
      console.log(resultado);
      alert(resultado);
      historial.push(resultado); // Agregar resultado al historial (Array)
    }

    // Mostrar historial con ciclo FOR
    console.log("Historial de operaciones (FOR):");
    for (let i = 0; i < historial.length; i++) {
      console.log("Operación " + (i + 1) + ": " + historial[i]);
    }

    // Mostrar historial con ciclo WHILE
    console.log("Historial de operaciones (WHILE):");
    let i = 0;
    while (i < historial.length) {
      console.log("Operación " + (i + 1) + ": " + historial[i]);
      i++;
    }

    // Filtrar resultados mayores a un valor específico -> Función de filtrado más adelante en el archivo index.js
    console.log("Resultados mayores a 10: ", filtrarMayoresQue(historial, 10));
  }); */

// Función de filtrado
function filtrarMayoresQue(arreglo, limite) {
  const filtrados = [];
  for (let i = 0; i < arreglo.length; i++) {
    const partes = arreglo[i].split(": ");
    if (partes.length > 1) {
      const valor = parseFloat(partes[1]);
      if (valor > limite) {
        filtrados.push(arreglo[i]);
      }
    }
  }
  return filtrados;
}

// ------------------------ Lección 4 - Funciones en JS

document
  .getElementById("initBtn")
  .addEventListener("click", function calcular() {
    // Variables
    const num1 = parseFloat(prompt("Ingresa un número:"));
    const op = prompt("Ingresa la el símbolo de la operación:(+, -, *, /)");
    const num2 = parseFloat(prompt("Ingresa otro número:"));

    const resultado = calcularOperacion(num1, op, num2);

    if (resultado !== undefined) {
      console.log(resultado);
      alert(resultado);
      historial.push(resultado); // Agregar resultado al historial (Array)
    }

    // Mostrar historial con ciclo FOR
    console.log("Historial de operaciones (FOR):");
    for (let i = 0; i < historial.length; i++) {
      console.log("Operación " + (i + 1) + ": " + historial[i]);
    }

    // Mostrar historial con ciclo WHILE
    console.log("Historial de operaciones (WHILE):");
    let i = 0;
    while (i < historial.length) {
      console.log("Operación " + (i + 1) + ": " + historial[i]);
      i++;
    }

    // Filtrar resultados mayores a un valor específico
    console.log("Resultados mayores a 10: ", filtrarMayoresQue(historial, 10));
  });

// Funciones para cada operación
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    alert("Error: No puedes dividir por cero.");
    return null;
  }
  return a / b;
}

// Función principal para calcular la operación
function calcularOperacion(num1, op, num2) {
  switch (op) {
    case "+":
      return "La suma es: " + sumar(num1, num2);
    case "-":
      return "La resta es: " + restar(num1, num2);
    case "*":
      return "La multiplicación es: " + multiplicar(num1, num2);
    case "/":
      let resultadoDivision = dividir(num1, num2);
      return resultadoDivision !== null
        ? `La división es: ${resultadoDivision}`
        : undefined;
    default:
      alert("Operación no válida. Por favor, ingresa +, -, *, o /.");
      return undefined;
  }
}
