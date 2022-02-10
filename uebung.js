let beliebigerString;
let eineZahl;
let nochEineZahl;
let ergebnis;
let eineZahlMitKomma;
let ergebnisgrößer;

beliebigerString = "HelloWorld"
eineZahl = 17
nochEineZahl = 20
eineZahlMitKomma = 12.2
ergebnis - eineZahlMitKomma

function rechenspiele() {
    ergebnis = eineZahl * nochEineZahl
    if (ergebnis > eineZahlMitKomma)
    {
        console.log( ergebnis - eineZahlMitKomma )
    }else{
        console.log("Das Ergebnis ist zu klein!")
    }
}

function ungerade(ende){
    for (let i = 1; i <ende ; i+2) {
        console.log(i)
    }
}

function fibonacci(ende) {
    for (let i = 1; i <ende; i-1+i+2) {
    console.log(i)
    }
}