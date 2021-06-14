"use strict";

document.getElementById("patvirtinti").addEventListener("click", function() {
    let kintamasis, kintamasis1;
    let skaicius = 5;
    let suma;

    kintamasis = parseFloat(document.getElementById("kintamasis").value);
    kintamasis1 = parseFloat(document.getElementById("kintamasis1").value);

    suma = kintamasis + kintamasis1;



    // console.log(kintamasis );
    // console.log(kintamasis1 );
    // console.log(skaicius );
    // console.log(suma);
});

// 1 uzduotis
// let sekundes = 555555;
let sekundes = 48 * 3600 + 121 * 60 + 71; // 1 * 3600
let valandos, minutes, lsekundes;



// 3601 sekunde

// 1.x val - 1val
valandos = parseInt(sekundes/3600); //float -> integer

//visas minutes 3601 sekundziu = 60 min
//60.xxxx minuciu - 60 minuciu
minutes = parseInt(sekundes/60); //float -> integer; visos minutes sveikoji dalis

//3601 => 3601 - 60*60 = 1 sekunde
lsekundes = sekundes - minutes * 60;

//25
//true
//25 % 24 = 1
if(valandos >= 24) {
    valandos = valandos % 24;
}

if(minutes >= 60) {
    minutes = minutes % 60;
}

// console.log(valandos)
// console.log(minutes);
// console.log(lsekundes);

//Ciklai

//for ciklas


let zingsniai = 0;

let pElementas;

for (let i=0; i<40; i++) {
    
    pElementas = document.createElement("p"); // sukurtas bet neatvaizduojamas
    pElementas.classList.add("test");
    let divElementas = document.createElement("div"); // div sukurtas, bet neatvaizduojamas
    divElementas.classList.add("div-dydis");
    divElementas.innerText = i + 1; //pElementas

    if( (i+1) % 2 == 0 ) {
        divElementas.classList.add("zalias");
    }

    document.querySelector(".container").append(divElementas);

    console.log(i);
    zingsniai++;
    
}

.addEventListener



console.log("Zingsniai: " + zingsniai);


// Išveskite n-ženklio skaičiaus visus skaitmenis atskirai ir suraskite jų sumą.
