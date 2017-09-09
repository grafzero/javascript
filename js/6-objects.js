'use strict';

 var kaja = {

     imie: "Kaja",
     wzrost: 152,
     przedstawOsoba: function () {
         console.log(this.imie)
     }
 }

 var krystian = {
     imie: "Krystian",
     wzrost: 180,
     przedstawOsoba: function () {
         console.log(this.imie)
     }
 }


 kaja.przedstawOsoba();
 krystian.przedstawOsoba();

 console.log(kaja);
 console.log(kaja.wzrost);
 console.log(kaja['wzrost']);



 class Osoba {
     constructor(firstName, lastName, height, eyes) {
         this.imie = firstName;
         this.nazwisko = lastName;
         this.wzrost = height;
         this.oczy = eyes;
     }


     wyswietlInfo() {
         console.log("Imie to: " + this.imie + " a nazwisko to: " + this.nazwisko);
         console.log("Wzrost: " + this.wzrost + ", oczy: " + this.oczy);
     }

 }


 var maciek = new Osoba("Maciek", "Slotwinski", 180, "brązowe");
 maciek.wyswietlInfo();

 var unnamed = new Osoba();
 unnamed.wyswietlInfo();
 unnamed.imie = null;
 unnamed.wyswietlInfo();
