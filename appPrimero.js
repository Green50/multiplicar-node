const { crearArchivo } = require('./Multiplicar/multiplicar');

//module es una palabra reservada de node en la que esta disponible en todo
//momento de la ejecución.
//process trae los datos del sistema
//argv son los parametros que trae, por defecto trae 2 donde se ubica node y donde se ubica el proyecto
//console.log(module);
//console.log(process.argv);

//vamos a recivir por comando el 3 parametro de argv que será el que escribamos por consola
//node app --base=7
let argv = process.argv;
let parametro = argv[2];

//Split devuelve un array con ambas partes cortadas por en este caso el signo = , pero solo queremos el numero
let base = parametro.split('=')[1]

console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => {
        console.log(e);
    });