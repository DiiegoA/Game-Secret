// let verifyAttempt = () =>
//   console.log(document.getElementById("userValue").value);

let secretNumber = 0;
let cleanBox = () => (document.querySelector("#userValue").value = "");
let attempts = 0;
let listDrawnNumbers = [];
let maximumNumber = 10;
let maximumAttempts = maximumNumber * 0.5;

function assignTextElement(element, text) {
  let elementHTML = document.querySelector(element);
  elementHTML.innerHTML = text;
  return;
}

function verifyAttempt() {
  let userNumber = parseInt(document.getElementById("userValue").value);
  // console.log(typeof userNumber);
  // console.log(generateSecretNumber());
  // console.log(typeof secretNumber);
  // console.log(userNumber);
  // console.log(secretNumber === userNumber);

  // console.log(secretNumber);
  // console.log(attempts);

  if (secretNumber === userNumber) {
    assignTextElement(
      "p",
      `Acertaste el número en ${attempts} ${
        attempts === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (userNumber > secretNumber) {
      assignTextElement("p", "El número secreto es menor");
    } else {
      assignTextElement("p", "El núumero secreto es mayor");
    }
    attempts++;
    cleanBox();
    if (attempts > parseInt(maximumAttempts)) {
      assignTextElement(
        "p",
        `Llegaste al número maximo de ${parseInt(maximumAttempts)} ${
          parseInt(maximumAttempts) == 1 ? "intento" : "intentos"
        }`
      );
      document.getElementById("reiniciar").removeAttribute("disabled");
    }
  }
  return;
}

function generateSecretNumber() {
  let generatedNumber = Math.floor(Math.random() * maximumNumber) + 1;

  // console.log(generatedNumber);
  // console.log(listDrawnNumbers);
  if (listDrawnNumbers.length == maximumNumber) {
    assignTextElement("p", "Ya se sortearon todos los números posibles");
  } else {
    if (listDrawnNumbers.includes(generatedNumber)) {
      return generateSecretNumber();
    } else {
      listDrawnNumbers.push(generatedNumber);
      return generatedNumber;
    }
  }
}
function initialConditions() {
  assignTextElement("h1", "Juego del número secreto!");
  assignTextElement("p", `Escoge un número del 1 al ${maximumNumber}`);
  secretNumber = generateSecretNumber();
  attempts = 1;
}

function restartGame() {
  //Limpiar caja
  cleanBox();
  // Generar un nuevo número secreto
  secretNumber = generateSecretNumber();
  // Inicializar el número de intentos
  attempts = 1;
  // Indicar mensaje de intervalos de números (si es necesario)
  assignTextElement("p", `Escoge un número del 1 al ${maximumNumber}`);
  // Deshabilitar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

initialConditions();
