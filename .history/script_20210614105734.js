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


//2 val - visas valandas
valandos = parseInt(sekundes/3600); //float -> integer


minutes = parseInt(sekundes/60); //float -> integer; visos minutes sveikoji dalis

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

console.log(valandos)
console.log(minutes);
console.log(lsekundes);