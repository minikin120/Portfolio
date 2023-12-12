let x = Math.floor((Math.random()*10)+1)
console.log(x)
const Yhdistää = () =>{
    if (x > document.getElementById("numero").value)
    document.getElementById("vasta").innerHTML = "Numero on suurempi";
    else
    document.getElementById("vasta").innerHTML = "Numero on pienempi";
    if (x == document.getElementById("numero").value)
    document.getElementById("vasta").innerHTML = "Oikein!";
}

function aloita(){
    nappi = document.getElementById("Start");
    nappi.style.display = "none";
    kaikki = document.getElementById("all");
    kaikki.style.display = "block";
}