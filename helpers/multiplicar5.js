// Importa el módulo 'fs' para manipular archivos.
const fs = require('fs');

// Importa la librería 'colors' para agregar colores al texto en la consola.
const colors = require('colors');

// Importa 'PDFDocument' de la librería 'pdfkit' para crear archivos PDF.
const PDFDocument = require('pdfkit');

// Función que limpia los colores ANSI de una cadena de texto.
const limpiarColores = (texto) => {
    const expresionRegular = /\x1b\[[0-9;]*m/g;
    return texto.replace(expresionRegular, '');
};

// Función asíncrona 'crearArchivo' que genera un archivo PDF con la tabla de multiplicar.
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        console.clear();
        let salida = '', consola = '';

        // Bucle que genera las multiplicaciones.
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
        }

        if (listar) {
            console.log('---------------------'.green);
            console.log(`  Tabla del `.green, colors.blue(base));
            console.log('---------------------'.green);
            console.log(colors.blue(consola));
        }

        // Crear un archivo PDF usando 'pdfkit'.
        const doc = new PDFDocument();

        // Ruta del archivo PDF que se va a crear.
        const ruta = `salida/tabla-${base}-hasta-${hasta}.pdf`;

        // Crear el flujo de escritura para el archivo PDF.
        const writeStream = fs.createWriteStream(ruta);

        // Guardar el archivo PDF en la carpeta de salida.
        doc.pipe(writeStream);

        // Agregar el contenido de la tabla de multiplicar al PDF.
        doc.fontSize(16).text(`Tabla del ${base}`, {
            align: 'center',
            underline: true
        });

        doc.moveDown(); // Salta una línea.

        // Escribir la tabla de multiplicar en el PDF.
        doc.fontSize(12).text(limpiarColores(salida));

        // Finaliza la escritura del documento PDF.
        doc.end();

        return `tabla-${base}-hasta-${hasta}.pdf creado exitosamente`;

    } catch (err) {
        throw err;
    }
}

// Exporta la función 'crearArchivo' para que pueda ser utilizada en otros archivos.
module.exports = {
    crearArchivo
}

