// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

function arrayElementSelect(array, a, b) {
    var newArray = [];
    while (isNaN(a) || a >= b || a < 0 || a >= array.length - 1 || isNaN(b) || b > array.length - 1) {
        return false;
    }
    for (var i = a; i <= b; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

var mesi = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

var inizio = parseInt(prompt("Inserisci l'indice dell'array da dove vuoi iniziare la selezione"));

var fine = parseInt(prompt("Inserisci l'indice dell'array dove vuoi finire la selezione"));

var nuovoArray = arrayElementSelect(mesi, inizio, fine);

console.log(nuovoArray);