// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchine = [
    {
        "varieta": "corta",
        "peso": 500,
        "lunghezza": 8
    },
    {
        "varieta": "media",
        "peso": 600,
        "lunghezza": 40
    },
    {
        "varieta": "lunga",
        "peso": 700,
        "lunghezza": 50
    },
    {
        "varieta": "invernale",
        "peso": 800,
        "lunghezza": 25
    },
    {
        "varieta": "primaverile",
        "peso": 400,
        "lunghezza": 10
    },
    {
        "varieta": "estiva",
        "peso": 450,
        "lunghezza": 12
    },
    {
        "varieta": "autunnale",
        "peso": 650,
        "lunghezza": 14
    },
    {
        "varieta": "siciliana",
        "peso": 900,
        "lunghezza": 70
    },
    {
        "varieta": "calabrese",
        "peso": 850,
        "lunghezza": 80
    },
    {
        "varieta": "pugliese",
        "peso": 700,
        "lunghezza": 30
    },
];

//  Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchineCorte = [];
var zucchineLunghe = [];
var pesoZucchineCorte = 0;
var pesoZucchineLunghe = 0;

for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) {
        zucchineCorte.push(zucchine[i]);
        pesoZucchineCorte += zucchine[i].peso;
    } else {
        zucchineLunghe.push(zucchine[i]);
        pesoZucchineLunghe += zucchine[i].peso;
    }
}

console.log(zucchineCorte);
console.log(zucchineLunghe);

console.log("Il peso delle zucchine corte è: " + pesoZucchineCorte / 1000 + "kg");
console.log("Il peso delle zucchine lunghe è: " + pesoZucchineLunghe / 1000 + "kg");
