//10 variables, sumar los 3 primeros, multiplicar los 3 siguentes, el resultado de ambas restar el 7mo numero y el resultado de ello sumar los ultimos tres.

//Declarar Cariables
let a1 = 23;
let b2 = 16;
let c3 = 28;
let d4 = 25;
let e5 = 46;
let f6 = 10;
let g7 = 45;
let h8 = 56;
let i9 = 23;
let j0 = 36;

//Realizar operaciones
let suma = a1 + b2 + c3;
let multi = d4 * e5 * f6;
let opr = (suma + multi)-g7;
let resultado = opr + (h8 + i9 + j0);

//Mostrar resultado
document.write("El resultado de la suma de los primeros tres numeros es: ", suma);
document.write("<br>")
document.write("El resultado de la multiplicacion de los siguientes 3 numeros es: ", multi);
document.write("<br>")
document.write("El resultado de la suma de suma y multi mas la resta del septimo numero es: ",opr);
document.write("<br>")
document.write("El resultado de la operacion anterior mas la suma de los ultimos tre numero es: ",resultado);
