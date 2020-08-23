const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
const {argv} = require('./Config/yargs');
const colors = require('colors');

//console.log(argv2);
console.log(argv.base);
console.log(argv.limite);

//console.log(argv); //Las funnciones o parametros que pases por consola se va a un array llamado _

let comando = argv._[0];

switch (comando){
    case 'listar' :
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear' :
        console.log('Crear');
        crearArchivo(argv.base) //ya que no esta en una variable si no en argv
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(e => {
            console.log(e.red);
        });
        break;
    default:
        console.log('Comando no reconocido'.red);

}


// let parametro = argv[2];
// let base = parametro.split('=')[1]


