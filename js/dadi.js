console.log("JS OK");

//# Recupero gli elementi dal DOM
const play = document.getElementById("play-btn");
const resultPage = document.getElementById("result");

//# Lascio in ascolto il bottone per un click
play.addEventListener("click", function () {
  //! Eseguo tutta la logica

  //# Variabili
  let message = "Pareggio!!!";
  let bg = "bg-warning";

  //# Dichiaro le costanti per il random
  const randomUser = parseInt(Math.floor(Math.random() * 6) + 1);
  const randomPC = parseInt(Math.floor(Math.random() * 6) + 1);

  //# Stampo in pagina i risultati ottenuti
  resultPage.innerHTML =
    `<p class="bg-info d-inline-block me-4 p-3 h4">Il risultato del PC è: ${randomPC}</p>` +
    `<p class="bg-info d-inline-block p-3 h4">Il tuo risultato è: ${randomUser}</p>`;

  //# Controllo se il'utente ha vinto
  if (randomUser > randomPC) {
    message = "Hai vinto!!!";
    bg = "bg-success";
  }

  //# Controllo se l'utente ha perso
  else if (randomPC > randomUser) {
    message = "Hai perso!!!";
    bg = "bg-danger";
  }

  //# Stampo il messaggio
  resultPage.innerHTML += `<div class="${bg} p-3 h1">${message}</div>`;
});
