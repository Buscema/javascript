

//funcion para determinar si es o impar

function paripar(num){
    if(num % 2 === 0){
        console.log("Numero Par");
    }
    else{
        console.log(" Numero Impar")
        }
    }

paripar(6);

//Comparar si es mayor o menor
function mayormenor(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " es mayor que " +num2);
    } else if (num2 > num1) {
      console.log(num2 + " es mayor que " + num1);
    } else {
      console.log("Son iguales");
    }
  }

  mayormenor(2,2);

  //Verificar si es numero de 5

  function multiplo5(num1){

    if(num1 % 5 === 0){
        console.log( "Es multiple de 5")
    }
        else{
            console.log( "Segui participando, no es multiplo de 5! ")
        }
  }

  multiplo5(33);

//Función para imprimir todos los números desde 0 hasta un número dado:

  function hastaelnum(num) {
    for (let i = 0; i <= num; i++) {
      console.log(i);
    }
  }

  hastaelnum(12);

  // Función para imprimir una palabra la cantidad de veces indicada

  function imprimepalabra(palabra,cantidad) {
    for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
    }
  }

    imprimepalabra("SII",3);

//6- Función para imprimir todos los valores de un array:

var Miarray = [1,2,3,4,5,6];

function mostrararray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

mostrararray(Miarray);

//7- Función para imprimir todos los valores de un array, excepto el valor en la quinta posición:

function sinelquinto(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) {
        console.log(array[i]);
      }
    }
  }

  sinelquinto(Miarray);

  //8- Función para multiplicar cada número de un array por un número dado:

  function multiplicarpornumero(array, num) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * num);
    }
  }

  multiplicarpornumero(Miarray, 2);
  













