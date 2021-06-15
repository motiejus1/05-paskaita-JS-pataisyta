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

for (let i=0; i<40; i++) {
    
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

document.querySelectorAll(".test").addEventListener



console.log("Zingsniai: " + zingsniai);


// Išveskite n-ženklio skaičiaus visus skaitmenis atskirai ir suraskite jų sumą.

let skaicius, skaitmuo, suma;

suma = 0;
skaicius = 102030;



while (skaicius != 0) { //123456
  
   skaitmuo = skaicius % 10;//102030
   // 0 
   //102030
   //102033 / 10 = 10203

   skaicius = parseInt(skaicius / 10); 
   suma += skaitmuo;
   
   console.log("Skaitmuo: "+ skaitmuo); 

}

console.log("Suma: "+ suma) ;


let vaisius = "Obuolys";
let vaisius1 = "Kriause";
let vaisius2 = "Slyva";

//ES6 mums leidzia elgtis taip. Const
// const masyvas = ["Obuolys", "Kriause", "Slyva"];

// 0 - Obuolys, 1 - Kriause, 2 - Slyva 
let masyvas = ["Obuolys", "Kriause", "Slyva"];

let masyvas1 = [40, 15, 20, 30, 7];

let masyvas2 = [40, "Kriause", 20.2, 30, "Slyva"];

let mas = [vaisius, vaisius1, vaisius2, masyvas];

masyvas2[0] = "Kazkas tai kitas"

console.log(masyvas2[4]);

console.log(masyvas);
console.log(masyvas1);
console.log(masyvas2);

console.log(mas);
//......