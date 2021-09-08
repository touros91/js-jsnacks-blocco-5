// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function fonda(arrayPrimo, arraySecondo){
    var arrayTerzo = [];
    for (var i = 0; i < arrayPrimo.length; i++) {
            arrayTerzo.push(arrayPrimo[i]);
            arrayTerzo.push(arraySecondo[i]);
        }
    return arrayTerzo;
}

var arrayPrimo = ["a", "b", "c"];

var arraySecondo = [1, 2, 3];

if (arrayPrimo.length == arraySecondo.length) {
    var fondaArray = fonda(arrayPrimo, arraySecondo);
    console.log(fondaArray); 
} else {
    console.log("Errore! I due array non hanno la stessa lunghezza.")
}


