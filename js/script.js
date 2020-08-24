
// Lista mail valide per l'accesso
var listaEmail = ["marcodecrema@libero.it", "simonavg@inwind.it", "giorgio.pallino@hotmail.com"];
// Catturo la mail inserita dall'utente
var emailInserita = document.getElementById("email").value;
// bottone sul quale agirà l'evento
var login = document.getElementById("login");

// funzione che si eseguirà in relazione all'evento click
login.addEventListener("click", emailCheck);

// funzione di controllo della mail passata
function emailCheck() {
  for (i=0; i<=2; i++) {
    if (emailInserita == listaEmail[i]) {
      alert("BENVENUTO!");
    } else {
      alert("Email inserita non è valida");
    }
  }
};
