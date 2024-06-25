// let title = document.querySelector("h1");
// title.innerHTML = "Hora del Desafío";

// function consol() {
//   console.log("El botón fue clicado");
//   // alert("El botón fue clicado");
// }

// function promp() {
//   let city = prompt("Digite el nombre de una ciudad de Brasil");
//   alert(`Estuve en ${city} y me acordé de ti`);
// }

// function aler() {
//   alert("El Yo amo JS");
// }

// function sum() {
//   let num_1 = parseInt(prompt("Ingrese un número"));
//   let num_2 = parseInt(prompt("Ingrese un otro número"));
//   let result = num_1 + num_2;

//   alert(`La suma de ${num_1} y ${num_2} es: ${result}`);
// }

function iMC(weight, height) {
  let imc = weight / (height * height);
  console.log(`Su IMC es: ${imc}`);
  return imc;
}

iMC(70.5, 1.75);

function factorial(n) {
  // Caso base: si n es 0 o 1, el factorial es 1
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = n * factorial(n - 1);
  console.log(`factorial(${n}) = ${result}`);
  return result;
}

factorial(5);

function currencyConverter(valueUSD) {
  const tipoCambio = 4.8; // Tasa de cambio fija: 1 USD = 4.80 BRL
  let montoBRL = valueUSD * tipoCambio;
  console.log(`R$${montoBRL}`);
  return montoBRL;
}

currencyConverter(10);
