"use strict";

document.getElementById("patvirtinti").addEventListener("click", function() {
    let kintamasis, kintamasis1;
    let skaicius = 5;
    let suma;

    kintamasis = parseFloatdocument.getElementById("kintamasis").value;
    kintamasis1 = document.getElementById("kintamasis1").value;

    suma = kintamasis + kintamasis1;



    console.log(kintamasis );
    console.log(kintamasis1 );
    console.log(skaicius );
    console.log(suma);
});