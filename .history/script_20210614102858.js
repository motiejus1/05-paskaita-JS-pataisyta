"use strict";


let kintamasis, kintamasis1;
let skaicius = 5;
    let suma;

document.getElementById("patvirtinti").addEventListener("click", function() {


    kintamasis = parseFloat(document.getElementById("kintamasis").value);
    kintamasis1 = parseFloat(document.getElementById("kintamasis1").value);

    suma = kintamasis + kintamasis1;



    console.log(kintamasis );
    console.log(kintamasis1 );
    console.log(skaicius );
    console.log(suma);
});