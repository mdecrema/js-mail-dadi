
// Lista mail valide per l'accesso
var listaEmail = ["marcodecrema@libero.it", "simonavg@inwind.it", "giorgio.pallino@hotmail.com"];
// Catturo la mail inserita dall'utente
var emailInserita = document.getElementById("email").value;
// bottone sul quale agirà l'evento
var login = document.getElementById("login");


login.addEventListener("click", function() {
  for (i=0; i <= listaEmail.length; i++) {
   if (listaEmail[i] == emailInserita) {
     alert("BENVENUTO!");
   } else {
     alert("La mail inserita non è valida.")
   }
  }
});

// funzione di controllo della mail passata




var numComputer= document.getElementById("numComputer");
var numPlayer= document.getElementById("numPlayer");
var vincitore=document.getElementById("winner");
var play = document.getElementById("play");
var numGeneratoComputer= Math.floor(Math.random() * 6) + 1;
var numGeneratoPlayer =Math.floor(Math.random() * 6) + 1;

play.addEventListener("click", function() {
  numComputer.innerHTML=numGeneratoComputer;
  numPlayer.innerHTML=numGeneratoPlayer;
  if (numGeneratoPlayer > numGeneratoComputer) {
    vincitore.innerHTML="Player";
  } else {
    vincitore.innerHTML="Computer";
  }
});
