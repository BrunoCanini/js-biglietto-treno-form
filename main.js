const kilometri = document.getElementById("kmUtente");

const etaUtente = document.getElementById("anniUtente");

const nomeUtente = document.getElementById("nomePasseggero")

let sconto = 0

let prezzoBiglietto = 0

const button = document.getElementById("bottone");
button.addEventListener("click", function(){
    const kilometri = document.getElementById("kmUtente").value;
    const etaUtente = document.getElementById("anniUtente").value;
    const nomeUtente = document.getElementById("nomePasseggero").value;
    document.getElementById("nome").innerText = nomeUtente;


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
    document.getElementById("costoBiglietto").innerText = prezzoBiglietto + "€"

    let codiceCp = Math.floor(Math.random()*10000);
    document.getElementById("codice").innerText = codiceCp

    let carrozza = Math.floor(Math.random()*10);
    document.getElementById("nCarrozza").innerText = carrozza

});

const button2 = document.getElementById("annulla");
button2.addEventListener("click", function(){
    const nomeUtente = document.getElementById("nomePasseggero").value = "";
    document.getElementById("nome").innerText = nomeUtente;

    const kilometri = document.getElementById("kmUtente").value = "";

    prezzoBiglietto = "-";
    document.getElementById("costoBiglietto").innerText = prezzoBiglietto;

    let codiceCp = "-";
    document.getElementById("codice").innerText = codiceCp;

    let carrozza = "-";
    document.getElementById("nCarrozza").innerText = carrozza;

});