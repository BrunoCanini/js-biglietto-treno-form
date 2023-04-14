const kilometri = document.getElementById("kmUtente");

const etaUtente = document.getElementById("anniUtente");

let sconto = 0

let prezzoBiglietto = 0

const button = document.getElementById("bottone");
button.addEventListener("click", function(){
    const kilometri = document.getElementById("kmUtente").value;
    const etaUtente = document.getElementById("anniUtente").value;

    const prezzoKm = kilometri*0.21;

    if(etaUtente == "minorenne"){
        sconto = 20;
    } else if (etaUtente == "over65"){
        sconto = 40;
    } else if (etaUtente == "maggiorenne"){
        sconto = 0;
    }

    prezzoBiglietto = prezzoKm - (prezzoKm * sconto /100);
    prezzoBiglietto = Math.floor(prezzoBiglietto * 100) / 100;

    console.log(kilometri);
    console.log(etaUtente);
    console.log(prezzoKm);
    console.log(sconto);
    console.log(prezzoBiglietto);
});