cifrar = document.getElementById('cifrar');
descifrar = document.getElementById('descifrar');

cifrar.addEventListener('click', function(){
  let texto = document.getElementById('entrada').value; //estos son input
  let llave = document.getElementById('llave').value;//input

  if (texto=="" ||  llave=="") { //para ver q no esten vacios
    console.log("Debes llenar los campos");
  }
  else { // si no estan vacios
    if (/^([0-9])*$/.test(llave)){//verificar q la llave sea num .tex evalua expresion regular
        if (/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(texto)) { //si es num verifica q sean min y mayus
            cifrarTexto(texto,llave);// manda llamar funcion que cifra texto
        }
        else {
          console.log("El texto deben ser solo letras y espacios");
      }
    }else {
      console.log("LLave debe ser un numero");
    }
  }
}, false);

descifrar.addEventListener('click', function(){
  console.log("HOLA DESCIFRAR");
  let texto = document.getElementById('entrada').value;
  let llave = document.getElementById('llave').value;
  if (texto=="" ||  llave=="") {
    console.log("Debes llenar los campos");
  }
  else {
    if (/^([0-9])*$/.test(llave)){ //delimita como cambiarlo

      if (/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(texto)) {
        descifrarTexto(texto,llave);
      } else {
        console.log("El texto deben ser solo letras y espacios");
      }
    }else {
      console.log("LLave debe ser un numero");
    }
  }
}, false);

//////funciones////////////////////
function cifrarTexto(texto,llave){// tex llave ya llame con evento
  llave=parseInt(llave)
  let resultado =" ";//  es para que concatene toda la frase y se muestre en DOM

  for (i=0; i<texto.length; i++){// inicializa en 0 el recorrido de la frase
    let cadenas = texto.charCodeAt(i);//convierte las letras de la frase en posicion ascii


  if(cadenas >=65 && cadenas <= 90){// para mayusculas ascii
    resultado += String.fromCharCode((cadenas -65 + llave) %26 + 65);// se convierte las posiciones en letras
    document.getElementById("resultado").innerHTML= "Tu frase cifrada es "+resultado;
    //console.log((cadenas -65 + (int)llave) %26 + 65);
    console.log(resultado);

  }else if(cadenas >=97 && cadenas <=122){// para minusculas
    resultado+= String.fromCharCode((cadenas -97 + llave) %26 + 97 );
    document.getElementById("resultado").innerHTML= "Tu frase cifrada es " +resultado;


  }else if (cadenas >=32 && cadenas <=64){// PARA CARACTERES ESPECIALES
     resultado+=String.fromCharCode(cadenas);
     document.getElementById("resultado").innerHTML="Tu frase cifrada es " + resultado;
      }
    }

}
///////funcion desifrar
function descifrarTexto(texto,llave){
  console.log(texto);
  llave=parseInt(llave)
  let resultado =" ";//  es para que concatene toda la frase y se muestre en DOM

  for (i=0; i<texto.length; i++){// inicializa en 0 el recorrido de la frase
    let cadenas = texto.charCodeAt(i);//convierte las letras de la frase en posicion ascii
    //console.log(cadenas);

  if(cadenas >=65 && cadenas <= 90){// para mayusculas ascii
    resultado += String.fromCharCode((cadenas -90 - llave) %26 + 90);// se convierte las posiciones en letras
    document.getElementById("resultado").innerHTML= "Tu frase decifrada es "+resultado;
    console.log(resultado);

  }else if(cadenas >=97 && cadenas <=122){// para minusculas
    resultado+= String.fromCharCode((cadenas -122 - llave) %26 + 122 );
    document.getElementById("resultado").innerHTML= "Tu frase decifrada es " +resultado;
    console.log(resultado);

  }else if (cadenas >=32 && cadenas <=64){// PARA CARACTERES ESPECIALES
    resultado+=String.fromCharCode(cadenas);
    document.getElementById("resultado").innerHTML="Tu frase cifrada es " + resultado;
     }
      }
    }


    ////<div id="root"></div>
