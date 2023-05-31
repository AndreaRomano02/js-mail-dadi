console.log("JS OK");

//# Variabili
let message = "Ha perso!!!";

//# Dichiaro le costanti per il random
const randomUser = parseInt(Math.floor(Math.random() * 6) + 1);
const randomPC = parseInt(Math.floor(Math.random() * 6) + 1);

console.log("user number: " + randomUser, "pc number: " + randomPC);

//# Controllo se sono uguali
if (randomPC === randomUser) message = "Pareggio!!!";

//# Controllo a chi è uscito il numero maggiore
if (randomUser > randomPC) message = "Hai vinto!!!";

//# Stampo il messaggio
console.log(message);
