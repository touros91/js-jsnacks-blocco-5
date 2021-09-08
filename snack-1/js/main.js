// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var zucchine = [
    {
        "varieta": "corta",
        "peso": 500,
        "lunghezza": 30
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
        "lunghezza": 60
    },
    {
        "varieta": "autunnale",
        "peso": 650,
        "lunghezza": 60
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

// Calcola quanto pesano tutte le zucchine.

var pesoZucchine = 0;

for(var i = 0; i < zucchine.length; i++) {
    pesoZucchine += zucchine[i].peso;
}

console.log("Il peso di tutte le zucchine è: " + pesoZucchine / 1000 + "kg");
