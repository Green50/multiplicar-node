//yargs permite documentar y agregar parametros por consola, el command permite regular eso,
//1p: lo que hay que ingresar en cosola para que se active
//2p: una descripción de lo que hace ese comando
//3p: un objeto donde tienes los parametros demand: es que es obligatorio, alias es para -b y no --base 10 y default valor por defecto

const opt = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
    
}

const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla multiplicar', opt)
            .command('crear', 'Genera un archivo txt con la tabla multiplicar', opt//{
            //     base:{
            //         demand: true,
            //         alias: 'b'
            //     },
            //     limite: {
            //         alias: 'l',
            //         default: 10
            //     }
                
            // }
            )
            .help() //en realidad sin esto igual funciona el --help
            .argv;

module.exports = {
    argv
}