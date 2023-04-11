// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function esPar(numero) {
     if(numero % 2 === 0){
        console.log(`El número ${numero} es par`);
    } else {
        console.log(`El número ${numero} es impar`);
    }
};

esPar(4)
esPar(7)

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function distNum(num1, num2) {
    if (num1 > num2) {
      console.log(`El número ${num1} es mayor que ${num2}`);
    } else if (num1 < num2) {
      console.log(`El número ${num2} es mayor que ${num1}`);
    } else {
      console.log(`El número ${num1} es igual que ${num1}`);
    }
  }

distNum(10,8);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multCinco(num) {
    if (num % 5 === 0) {
      console.log(`El número ${num} es múltiplo de 5`);
    } else {
      console.log(`El número ${num} es múltiplo de 5`);
    }
  }

multCinco(25);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function impNum(num) {
    for (let i = 0; i <= num; i++) {
      console.log(i);
    }
  }

impNum(2);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.

function palNum(palabra, num) {
    for (let i = 0; i < num; i++) {
      console.log(palabra);
    }
  }

palNum("nucba", 5);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function recArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

recArray("nucba")

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function arrayQuinto(array) {
    for (let i = 0; i < array.length; i++) {
      if (i === 4) {
        continue;
      }
      console.log(array[i]);
    }
  }

let otroArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrayQuinto(otroArray);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multArray(array, num) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * num);
    }
  }

let numeroarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multiplic = 2;
multArray(numeroarray, multiplic);
