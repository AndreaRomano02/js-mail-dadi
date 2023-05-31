console.log("JS OK");

//# PRELIMINARI
let emailAnswer;
let emailCorrect;
//* Creo l'array con le varie email dentro
const emailList = [
  "andrea@gmail.com",
  "carlo@gmail.com",
  "marco@gmail.com",
  "giovanni@gmail.com",
];

console.table(emailList);

//# Chiedo all'utente di inserire la sua email
const userEmail = prompt("Inserisci la tua email", "@gmail.com").trim();
console.log(userEmail);

//# Creo il ciclo per scorrere l'Array
for (let i = 0; i < emailList.length; i++) {
  console.log(emailList[i]);
  if (emailList[i] === userEmail.toLowerCase()) emailCorrect = "Benvenuto ";
  else emailAnswer = "Non puoi accedere alla pagina";
}

//# Stampo la risposta in console
if (emailCorrect) console.log(emailCorrect);
else console.log(emailAnswer);
