/*Snack 1. Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/

//dichiarativa
function somma(num1, num2) {
  return num1 + num2;
}
//anonima
const somma = function (num1, num2) {
  return num1 + num2;
};
//arrow function
const somma = (num1, num2) => num1 + num2;

