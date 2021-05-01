//variables & constantes
console.log('Alcance de variables');

var variableglobal = 'variable de alcance global';
var variableconstante = 'constante durante ejecucion';
let varletlocal = 'ABC';
let varletnumero = 1112;
console.log('Variable global 1 ' +variableglobal);
{
    variableglobal = 'otro valor'
    console.log('Variable global 2' +variableglobal)
    let varletlocal = 'ABC';
}

if (true) {
    console.log('Adentro del IF');
}

switch (key) {
    case value:

        break;

    default:

        break;
}

while (false) {

}

do {

} while (false);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

array.forEach(function (element => {

}));

for {const key in object) {
    if (object.hasOwnProperty.call(object,key)){
        const element = object[key];
    }
}

for (const iterator of object) {

}

try {

} catch (error) {
     
} finally {
    
}