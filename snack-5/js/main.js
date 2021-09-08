// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

function arrayElementSelect(array, a, b) {
    var newArray = [];
    for (var i = a; i <= b; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

var mesi = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
var start = 2;
var end = 5;

var nuovoArray = arrayElementSelect(mesi, start, end);

console.log(nuovoArray);