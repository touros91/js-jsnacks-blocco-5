// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function fonda(arrayPrimo, arraySecondo){
    var arrayTerzo = [];
    if (arrayPrimo.length == arraySecondo.length) {
        for (var i = 0; i < arrayPrimo.length; i++) {
            arrayTerzo.push(arrayPrimo[i]);
            arrayTerzo.push(arraySecondo[i]);
        }
    } else {
        console.log("Errore! I due array non hanno la stessa lunghezza.");
    }
    return arrayTerzo;
}

var arrayPrimo = ["a", "b", "c"];

var arraySecondo = [1, 2, 3];

var fondaArray = fonda(arrayPrimo, arraySecondo);
console.log(fondaArray);



