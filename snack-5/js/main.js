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

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var start = 2;
var end = 6;

var nuovoArray = arrayElementSelect(arr, start, end);

console.log(nuovoArray);