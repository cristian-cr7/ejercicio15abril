console.log('+---------------bucles---------------+')

let limitebucle = 10;
let contador = 0;

console.log('+Bucle: do while');
do{
    contador ++;
    console.log('contador: '+contador);
} while (contador < limitebucle);

console.log('+Bucle: do while');
let letcondicion = true;

while(letcondicion) {
    let letrandom = Math.random() * 10;
    console.log('Numero randomico: '+letrandom);
    if (letrandom > 5) {
        letcondicion = false;
        console.log('salida bucle: '+letcondicion);
    }
}




console.log('+---------------bucles---------------+')
let limitefor = 8;

for (let index = 0; index < limitefor; index++) {
    let randomfor = Number.parseInt((Math.random() * 10),10);
    console.log('indice for: '+index);
    console.log('Random: '+randomfor);


}
