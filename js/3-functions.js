'use strict';

var imie;
var imieDamskie = "Kaja";
var wiek = 37;
var kolor = "czerwony";

imie = imieDamskie;

function wypiszImie() {
    console.log('jjjj');
}

function wypiszImie(imieDoWyswietlenia) {
    console.log(imieDoWyswietlenia);
}

imieDamskie = 'Ola';
var imieMeskie = 'Mateusz';

wypiszImie(imieDamskie);
wypiszImie(imieMeskie);




wypisuj("hehe"); // funkcja z innego skryptu
wypiszImie(samochod); // var z innego skryptu


function multiplyThreeNumbers(factor1, factor2, factor3){
    return factor1*factor2*factor3;
}

console.log(multiplyThreeNumbers(2,2,2));
