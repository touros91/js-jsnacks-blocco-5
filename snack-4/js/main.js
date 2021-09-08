// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


function fonda(arrayPrimo, arraySecondo){
    var arrayTerzo = [];
    for (var i = 0; i < arrayPrimo.length; i++) {
        for (var i = 0; i < arraySecondo.length; i++) {
            arrayTerzo.push(arrayPrimo[i]);
            arrayTerzo.push(arraySecondo[i]);
        }
    }
    return arrayTerzo;
}

// for (var i = 0; i < arrayPrimo.length; i++) {
//     for (var i = 0; i < arraySecondo.length; i++) {
//         arrayTerzo.push(arrayPrimo[i]);
//         arrayTerzo.push(arraySecondo[i]);
//     }
// }

var arrayPrimo = ["a", "b", "c"];

var arraySecondo = [1, 2, 3];

var arrayTerzo = [];

console.log(fonda(arrayPrimo, arraySecondo));



