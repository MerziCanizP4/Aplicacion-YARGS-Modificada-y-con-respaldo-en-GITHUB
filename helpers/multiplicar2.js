const { rejects } = require('assert');
const fs = require('fs')

/**
 * Se utiliza el modulo.exports para dar permiso a este archivo
 * de exportar crearArchivo hast el final de este archivo.
 */

const crearArchivo = (base = 5) =>{

    return new Promise ((resolve, reject) =>{
    console.log('====================');
    console.log('     Tabla del', base);
    console.log('====================');

    let salida = '';

    for (let i = 1; i < 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;

}

console.log(salida);

fs.writeFileSync(`tabla-${base}.pdf`, salida)

resolve(`tabla-${base}.pdf`);

})
}

module.exports = {
    crearArchivo
}
