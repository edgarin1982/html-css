const num1 = prompt("ingrese el num 1");
const num2 = prompt("ingrese el num 2");

const resta = num1 - num2;

if (resta > 0) {
    console.log('es mayor a cero');
    let imparpar = resta % 2;
    if (imparpar == 0) {
        console.log('Es par');        
    }else{
        console.log('Es impar');
    }
} else {
    console.log('es menor o igual a cero');
}