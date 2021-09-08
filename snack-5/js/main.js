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

var inizio = parseInt(prompt("Inserisci l'indice dell'array da dove vuoi iniziare la selezione"));

while (isNaN(inizio) || inizio >= fine || inizio < 0 || inizio >= mesi.length - 1) {
    alert("Errore! L'indice di inizio deve essere un numero, non può essere minore di zero, deve essere minore dell'indice di fine e minore della lunghezza dell'array -1.");
    inizio = parseInt(prompt("Inserisci l'indice dell'array da dove vuoi iniziare la selezione"));
}

var fine = parseInt(prompt("Inserisci l'indice dell'array dove vuoi finire la selezione"));

while (isNaN(fine) || fine > mesi.length - 1){
    alert("Errore! L'indice di fine deve essere un numero, maggiore dell'indice di inizio e non può essere più grande della lunghezza dell'array -1.")
    fine = parseInt(prompt("Inserisci l'indice dell'array dove vuoi finire la selezione"));
}

var nuovoArray = arrayElementSelect(mesi, inizio, fine);

console.log(nuovoArray);

alert(`Il nuovo array generato è composto dai seguenti elementi: ${nuovoArray}`);