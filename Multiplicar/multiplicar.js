//tipos requires
const fs = require('fs'); //Esta libreria que ya esta en node
const colors = require('colors');


let listarTabla = (base, limit = 10) => {

    console.log('==================='.green);
    console.log(`tabla de ${base}`.rainbow);
    console.log('==================='.green);

    for (let i = 0; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i} \n`);
    }

}

crearArchivo = (base, limit = 10) => {
    return new Promise((resolve, reject) =>{

        if(!Number(base)){
            reject('No es un número')
            return;
        }

        let data = ''

        for (let i = 0; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
            console.log(`${base} * ${i} = ${base * i} \n`);
        }

        //Documentacion de node
        //1p archivo, 2 datos, 3 callback con paramentro err de error
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`Tabla-${base}.txt`);

        });


    });
}

//IMPORTANTE
//Modulo permite exportar funciones globales

module.exports = {
    crearArchivo : crearArchivo,
    listarTabla // si tienen el mismo nombre lo puedes obviar
}

