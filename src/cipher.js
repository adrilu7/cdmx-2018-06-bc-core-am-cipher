window.cipher = {
  //////funciones////////////////////
  encode:(offset,string) => {// tex llave ya llame con evento
    let resultado ="";//  es para que concatene toda la frase y se muestre en DOM

    for (let i=0; i<string.length; i++){// inicializa en 0 el recorrido de la frase
      let cadenas = string.charCodeAt(i);//convierte las letras de la frase en posicion ascii

    if(cadenas >=65 && cadenas <= 90){// para mayusculas ascii
      resultado += String.fromCharCode((cadenas -65 + offset) %26 + 65);// se convierte las posiciones en letras

      console.log(resultado);

    }else if(cadenas >=97 && cadenas <=122){// para minusculas
      resultado+= String.fromCharCode((cadenas -97 + offset) %26 + 97 );


    }else if (cadenas >=32 && cadenas <=64){// PARA CARACTERES ESPECIALES
       resultado+=String.fromCharCode(cadenas);

        }
      }
     return ("<p>Tu texto cifrado es:</p> "+ resultado);

   },

  decode:(offset,string) =>{
    console.log(string);
    let resultado ="";//  es para que concatene toda la frase y se muestre en DOM

    for (let i=0; i<string.length; i++){// inicializa en 0 el recorrido de la frase
      let cadenas = string.charCodeAt(i);//convierte las letras de la frase en posicion ascii
      //console.log(cadenas);

    if(cadenas >=65 && cadenas <= 90){// para mayusculas ascii
      resultado += String.fromCharCode((cadenas -90 - offset) %26 + 90);// se convierte las posiciones en letras
      console.log(resultado);

    }else if(cadenas >=97 && cadenas <=122){// para minusculas
      resultado+= String.fromCharCode((cadenas -122 - offset) %26 + 122 );
      console.log(resultado);

    }else if (cadenas >=32 && cadenas <=64){// PARA CARACTERES ESPECIALES
      resultado+=String.fromCharCode(cadenas);

       }
        }

        return ("<p>Tu texto descifrado es:</p> "+ resultado);
      },

      createCipherWithOffset: () =>{}

};
