console.log("JS OK");

//# PRELIMINARI
//* Recupero gli elementi dal DOM
const emailElement = document.getElementById("user-email");
const btnElement = document.getElementById("btn");
const answerElement = document.getElementById("answer");
console.log(emailElement, btnElement, answerElement);

//* Creo l'array con le varie email dentro
const emailList = [
  "andrea@gmail.com",
  "carlo@gmail.com",
  "marco@gmail.com",
  "giovanni@gmail.com",
];

console.table(emailList);

//# Metto il bottone in ascolto
btnElement.addEventListener("click", function () {
  //* Recupero quello che ha scritto l'utente
  const userEmail = emailElement.value.trim();

  //* Imposto un messaggio di default ed aggiungo una classe per cambiare colore
  let message = "Sbagliato";
  answerElement.classList.add("bg-danger");

  //# Creo il ciclo per scorrere l'Array
  for (let i = 0; i < emailList.length; i++) {
    //* Controllo se nell'Array c'è l'email oppure no
    if (emailList[i] === userEmail.toLowerCase()) {
      //* Modifico il messaggio e cambio classe per cambiare colore
      message = "Corretto";
      answerElement.classList.remove("bg-danger");
      answerElement.classList.add("bg-success");
    }
  }

  //# Stampo la risposta in pagina
  answerElement.innerText = message;
});
