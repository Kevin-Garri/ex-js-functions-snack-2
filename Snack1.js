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


/*Snack 2 Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
*/
const quadrato = numero => numero * numero;

/*Snack 3 Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
*/

function eseguiOperazione(num1, num2, operatore) {
  return operatore(num1, num2);
}

//const somma = (num1, num2) => num1 + num2;
//const prodotto = (num1, num2) => num1 * num2;

/* Snack 4 Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/
function creaTimer(tempo) {
  return () => {
    setTimeout(() => {
      console.log("Tempo scaduto!");
    }, tempo)
  }
}
const timer = creaTimer(4000);

/* Snack 5 Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script
*/
function stampaOgniSecondo(messaggio) {
  setInterval(() => {
    console.log(messaggio);
  }, 1000);
}
stampaOgniSecondo("Ciao! Questo messaggio viene stampato ogni secondo.");

/* Snack 6 Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
*/
function creaContatoreAutomatico(intervallo) {
  let contatore = 0;
  return () => {
    setInterval(() => {
      contatore++;
      console.log(contatore);
    }, intervallo);
  }
}
const contaOgniSecondo = creaContatoreAutomatico(1000);
contaOgniSecondo();

/* Snack 7 Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/




