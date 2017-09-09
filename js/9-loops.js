for(var i = 10; i>0; i--){
    'use strict';
    console.log(i);
}

console.log("--------------------")

for(var i =0; i<10; ){
    console.log(i++);
    
}

console.log("--------------------");

for(var i =0; i<10; ){
    console.log(++i);
  
}


var imiona = ["janusz", "grazyna", "karyna", "seba"]

imiona.forEach(function(element, index){
    console.log("Element: " + element + " index: " + index)
});


