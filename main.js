let sconto = 0;

let prezzoBiglietto = 0;

let offerta ;

const button = document.getElementById("bottone");
button.addEventListener("click", function(){
    const kilometri = document.getElementById("kmUtente").value;
    const etaUtente = document.getElementById("anniUtente").value;
    const nomeUtente = document.getElementById("nomePasseggero").value;
    document.getElementById("nome").innerText = nomeUtente;


    const prezzoKm = kilometri*0.21;

    if(etaUtente == "minorenne"){
        sconto = 20;
        offerta = "Biglietto Junior"
    } else if (etaUtente == "over65"){
        sconto = 40;
        offerta = "Biglietto Senior"
    } else if (etaUtente == "maggiorenne"){
        sconto = 0;
        offerta = "biglietto Standard"
    }

    document.getElementById("biglietto").innerText = offerta;

    prezzoBiglietto = prezzoKm - (prezzoKm * sconto /100);
    prezzoBiglietto = Math.floor(prezzoBiglietto * 100) / 100;
    document.getElementById("costoBiglietto").innerText = prezzoBiglietto + "€"

    if(nomeUtente == "" || kilometri == ""){
        let codiceCp = 0;
        document.getElementById("codice").innerText = codiceCp;

        let carrozza = 0;
        document.getElementById("nCarrozza").innerText = carrozza

        let offerta = "-";
        document.getElementById("biglietto").innerText = offerta;
    } else {
        let codiceCp = Math.floor(Math.random()*10000 + 1);
        document.getElementById("codice").innerText = codiceCp;

        let carrozza = Math.floor(Math.random()*10 + 1);
        document.getElementById("nCarrozza").innerText = carrozza
    }

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

    let offerta = "-";
    document.getElementById("biglietto").innerText = offerta;
});