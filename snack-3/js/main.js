// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)


function reverse(parola){
    var parolaReverse = "";
    for (var i = parola.length - 1; i >= 0; i--) {
            parolaReverse += parola.charAt(i);
    }
    return parolaReverse;
}

var parolaGirata = reverse(prompt("Inserisci una parola"));

console.log(parolaGirata);
