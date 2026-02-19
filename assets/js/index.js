// Lección 1 - Primer script de JavaScript

// Mensajes de consola
console.log("Esta es la calculadora más básica del mundo.");
console.log("¡Puedes probar sus funciones!");

// Interacción con el usuario
let nombre = prompt("¿Cuál es tu nombre?");
alert("¡" + nombre + ", Me alegra tenerte por aquí!");

// Lección 2 - Variables, expresiones y sentencias condicionales

// Función de operaciones
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
