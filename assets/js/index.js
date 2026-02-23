/* =====================================================
LECCIÓN 1 - INTRODUCCIÓN AL LENGUAJE js (Primer script)
======================================================*/

// Mensajes de consola
console.log(
  "En esta aplicación puedes resolver problemas usando la calculadora más básica del mundo.",
);
console.log("¡Bienvenido!");

// Interacción con el usuario
let nombre = prompt("¿Cuál es tu nombre?");
alert("¡" + nombre + ", Me alegra tenerte por aquí!");

/* ============================================================
LECCIÓN 2 - Variables, expresiones y sentencias condicionales
=============================================================*/

// --------------------------- (Código reemplazado en lección 3)

// Función de operaciones

// document
//   .getElementById("initBtn")
//   .addEventListener("click", function calcular() {
//     // Variables
//     const num1 = parseFloat(prompt("Ingresa un número:"));
//     const op = prompt("Ingresa la el símbolo de la operación:(+, -, *, /)");
//     const num2 = parseFloat(prompt("Ingresa otro número:"));

//     let resultado;
//     switch (op) {
//       case "+":
//         resultado = "La suma es: " + (num1 + num2);
//         break;
//       case "-":
//         resultado = "La resta es: " + (num1 - num2);
//         break;
//       case "*":
//         resultado = "La multiplicación es: " + num1 * num2;
//         break;
//       case "/":
//         if (num2 === 0) {
//           alert("Error:No puedes dividir por cero.");
//         } else {
//           resultado = "La división es: " + num1 / num2;
//         }
//         break;
//       default:
//         alert("Operación no válida. Por favor, ingresa +, -, *, o /.");
//     }
//     if (resultado !== undefined) {
//       console.log(resultado);
//       alert(resultado);
//     }
//   });

/* =================================
LECCIÓN 3 - Arreglos y cliclos
==================================*/

// Array historial de operaciones
const historial = [];

// Modificación de la calculadora para almacenar el historial y recorrerlo con ciclos FOR y WHILE
// ------------------------------------------------------------ (Código reemplazado en lección 4)

// document
//   .getElementById("initBtn")
//   .addEventListener("click", function calcular() {
//     // Variables
//     const num1 = parseFloat(prompt("Ingresa un número:"));
//     const op = prompt("Ingresa la el símbolo de la operación:(+, -, *, /)");
//     const num2 = parseFloat(prompt("Ingresa otro número:"));

//     let resultado;
//     switch (op) {
//       case "+":
//         resultado = "La suma es: " + (num1 + num2);
//         break;
//       case "-":
//         resultado = "La resta es: " + (num1 - num2);
//         break;
//       case "*":
//         resultado = `La multiplicación es: ${num1 * num2}`;
//         break;
//       case "/":
//         if (num2 === 0) {
//           alert("Error:No puedes dividir por cero.");
//         } else {
//           resultado = `La división es: ${num1 / num2}`;
//         }
//         break;
//       default:
//         alert("Operación no válida. Por favor, ingresa +, -, *, o /.");
//     }
//     if (resultado !== undefined) {
//       console.log(resultado);
//       alert(resultado);
//       historial.push(resultado); // Agregar resultado al historial (Array)
//     }

//     // Mostrar historial con ciclo FOR
//     console.log("Historial de operaciones (FOR):");
//     for (let i = 0; i < historial.length; i++) {
//       console.log("Operación " + (i + 1) + ": " + historial[i]);
//     }

//     // Mostrar historial con ciclo WHILE
//     console.log("Historial de operaciones (WHILE):");
//     let i = 0;
//     while (i < historial.length) {
//       console.log("Operación " + (i + 1) + ": " + historial[i]);
//       i++;
//     }

//     // Filtrar resultados mayores a un valor específico -> Función de filtrado más adelante en el archivo index.js
//     console.log("Resultados mayores a 10: ", filtrarMayoresQue(historial, 10));
//   }); */

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

/* =============================
LECCIÓN 4 - Funciones en JS
==============================*/
// ------------------------------------------- (Código modificado en lección 5)
// document
//   .getElementById("initBtn")
//   .addEventListener("click", function calcular() {
//   Variables
//   const num1 = parseFloat(prompt("Ingresa un número:"));
//   const op = prompt("Ingresa la el símbolo de la operación:(+, -, *, /)");
//   const num2 = parseFloat(prompt("Ingresa otro número:"));

//   const resultado = calcularOperacion(num1, op, num2);

//   if (resultado !== undefined) {
//     console.log(resultado);
//     alert(resultado);
//     historial.push(resultado); // Agregar resultado al historial (Array)
//   }

//   // Mostrar historial con ciclo FOR

//   console.log("Historial de operaciones (FOR):");
//   for (let i = 0; i < historial.length; i++) {
//     console.log("Operación " + (i + 1) + ": " + historial[i]);
//   }

//   // Mostrar historial con ciclo WHILE
//   console.log("Historial de operaciones (WHILE):");
//   let i = 0;
//   while (i < historial.length) {
//     console.log("Operación " + (i + 1) + ": " + historial[i]);
//     i++;
//   }

//   // Filtrar resultados mayores a un valor específico
//   console.log("Resultados mayores a 35: ", filtrarMayoresQue(historial, 35));
// });

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
      return `${num1} + ${num2} = ${sumar(num1, num2)}`;
    case "-":
      return `${num1} - ${num2} = ${restar(num1, num2)}`;
    case "*":
      return `${num1} * ${num2} = ${multiplicar(num1, num2)}`;
    case "/":
      let resultadoDivision = dividir(num1, num2);
      return resultadoDivision !== null
        ? `${num1} / ${num2} = ${resultadoDivision}`
        : undefined;
    default:
      alert("Operación no válida. Por favor, ingresa +, -, *, ó /.");
      return undefined;
  }
}

/* =====================================================
LECCIÓN 5 - Conceptos básicos de objetos en JavaScript
======================================================*/

// Calculadora con ciclo while
document
  .getElementById("initBtn")
  .addEventListener("click", function calcular() {
    let continuar = true;

    while (continuar) {
      //  Variables
      const num1Input = prompt("Ingresa un número:");
      if (num1Input === null) break; // Salir del ciclo con Cancelar
      const num1 = parseFloat(num1Input);

      const opInput = prompt(
        "Ingresa la el símbolo de la operación:(+, -, *, /)",
      );
      if (opInput === null) break; // Salir del ciclo con Cancelar
      const op = opInput;

      const num2Input = prompt("Ingresa otro número:");
      if (num2Input === null) break; // Salir del ciclo con Cancelar
      const num2 = parseFloat(num2Input);

      const resultado = calcularOperacion(num1, op, num2);

      if (resultado !== undefined) {
        console.log(resultado);
        alert(resultado);
        historial.push(resultado); // Agregar resultado al historial global (Array en lección 3)

        if (!resultadosEstudiantes[nombre])
          resultadosEstudiantes[nombre] = {
            puntaje: 0,
            problemas: [],
            operaciones: [],
          };

        let pasos = [];
        let resultadoFinal;

        switch (op) {
          case "+":
            resultadoFinal = sumar(num1, num2);
            break;
          case "-":
            resultadoFinal = restar(num1, num2);
            break;
          case "*":
            resultadoFinal = multiplicar(num1, num2);
            break;
          case "/":
            resultadoFinal = dividir(num1, num2);
            break;
          default:
            resultadoFinal = "Operación inválida";
        }

        pasos.push(`${num1} ${op} ${num2} = ${resultadoFinal}`);

        resultadosEstudiantes[nombre].operaciones.push({
          pregunta: resultadosEstudiantes[nombre].operaciones.length + 1,
          pasos: pasos,
        });
      }

      // Preguntar si quiere continuar
      continuar = confirm("¿Quieres realizar otra operación?");

      // -------------------------------------------- (De lo solicitado en lección 3)
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

      // Filtrar resultados mayores a un valor específico con función reutilizable
      console.log(
        "Resultados mayores a 35: ",
        filtrarMayoresQue(historial, 35),
      );
      // -------------------------------------------------------------------------------
    }
  });

// Objeto con propiedades (respuesta, historial, cantidad ideal de operaciones)
let problemas = [
  {
    respuesta: 107,
    historial: [],
    idealOperaciones: 3,
    evaluar: function (respuestaEstudiante, nombre) {
      const correcto = respuestaEstudiante === this.respuesta;
      this.historial.push(
        `Respuestas de ${nombre}: ${respuestaEstudiante} -> ${correcto ? "Correcto" : "Incorrecto"}`,
      );
      return correcto;
    },
  },
  {
    respuesta: 16,
    historial: [],
    idealOperaciones: 4,
    evaluar: function (respuestaEstudiante, nombre) {
      const correcto = respuestaEstudiante === this.respuesta;
      this.historial.push(
        `Respuestas de ${nombre}: ${respuestaEstudiante} -> ${correcto ? "Correcto" : "Incorrecto"}`,
      );
      return correcto;
    },
  },
  {
    respuesta: 25,
    historial: [],
    idealOperaciones: 3,
    evaluar: function (respuestaEstudiante, nombre) {
      const correcto = respuestaEstudiante === this.respuesta;
      this.historial.push(
        `Respuestas de ${nombre}: ${respuestaEstudiante} -> ${correcto ? "Correcto" : "Incorrecto"}`,
      );
      return correcto;
    },
  },
  {
    respuesta: 85,
    historial: [],
    idealOperaciones: 2,
    evaluar: function (respuestaEstudiante, nombre) {
      const correcto = respuestaEstudiante === this.respuesta;
      this.historial.push(
        `Respuestas de ${nombre}: ${respuestaEstudiante} -> ${correcto ? "Correcto" : "Incorrecto"}`,
      );
      return correcto;
    },
  },
];

// Evaluar cuestionario
let resultadosEstudiantes = {};

function evaluarCuestionario() {
  let puntaje = 0;
  let resultadoTexto = `Resultados de ${nombre}:\n\n`;

  // Recorrer ciclo con FOR para evaluar cada respuesta
  problemas.forEach((problema, i) => {
    const respuestaEstudiante = parseFloat(
      document.getElementById(`respuesta${i}`).value,
    );

    if (problema.evaluar(respuestaEstudiante, nombre)) {
      puntaje += 10;
      resultadoTexto += `Pregunta ${i + 1}: Correcto\n`;
    } else {
      puntaje -= 5;
      resultadoTexto += `Pregunta ${i + 1}: Incorrecto\n`;
    }

    // Comparar número de operaciones con ideal y ajustar puntaje
    if (problema.historial.length === problema.idealOperaciones) {
      puntaje += 2; // Bono por usar la cantidad ideal
    } else if (problema.historial.length > problema.idealOperaciones) {
      puntaje -= 1; // penalización por exceder la cantidad
    }
  });

  if (
    resultadosEstudiantes[nombre] &&
    resultadosEstudiantes[nombre].operaciones
  ) {
    console.log(`Operaciones realizadas por ${nombre}:\n`);
    resultadosEstudiantes[nombre].operaciones.forEach((op) => {
      console.log(`Pregunta ${op.pregunta}:`);
      op.pasos.forEach((paso) => console.log(paso));
    });
  }

  resultadoTexto += `Puntaje final: ${puntaje} puntos\n`;
  document.getElementById("resultado").innerHTML = resultadoTexto;

  resultadosEstudiantes[nombre] = {
    puntaje: puntaje,
    problemas: problemas,
    operaciones: resultadosEstudiantes[nombre]?.operaciones || [],
  };

  console.log("Resultados guardados:", resultadosEstudiantes);
}

document
  .getElementById("cuestionario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    evaluarCuestionario();
  });
