let descifrar = document.getElementById('descifrar');//boton
let cifrar = document.getElementById('cifrar'); //boton
let string1 = document.getElementById('entrada'); //estos son input
let offset1 = document.getElementById('offset');//input
let resultado1 = [];
let resultado2 = [];


cifrar.addEventListener('click', evento => {
 let string= string1.value;
 let offset =offset1.value;
 let resul = document.getElementById("resultado");

 if (offset== "" ||  string== "")  {  //para ver q no esten vacios
   alert("Debes llenar los campos");
 } else { // si no estan vacios
   if (/^([0-9])*$/.test(offset)){//verificar q la llave sea num .tex evalua expresion regular
       if (/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(string)) { //verificar una expresion regular q sean min y mayus
         document.getElementById("resultado").innerHTML= cipher.encode(parseInt(offset),string);
           // manda llamar funcion que cifra texto
       }else {
         alert("El texto deben ser solo letras y espacios");
       }
   }else {
     alert("LLave debe ser un numero");
   }
}
});




descifrar.addEventListener('click', evento => {
 let string= string1.value;
 let offset =offset1.value;
 let resul = document.getElementById("resultado");

 console.log("HOLA DESCIFRAR");

 if (offset=="" ||  string=="") {
   alert("Debes llenar los campos");
 }
 else {
   if (/^([0-9])*$/.test(offset)){ //delimita como cambiarlo

     if (/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(string)) {
     document.getElementById("resultado").innerHTML= cipher.decode(parseInt(offset),string);
     } else {
       alert("El texto deben ser solo letras y espacios");
     }
   }else {
     alert("LLave debe ser un numero");
   }
 }
}, false);



   ////<div id="root"></div>

