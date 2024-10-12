// Importa la función 'crearArchivo' del archivo 'multiplicar5.js' que se encuentra en la carpeta 'helpers'.
// Esta función es la encargada de crear el archivo con la tabla de multiplicar.
const { crearArchivo } = require('./helpers/multiplicar5');
// Importa la librería 'colors' para cambiar los colores del texto en la consola.
const colors = require('colors');
// Importa la configuración de 'yargs' desde el archivo 'yargs3.js' en la carpeta 'config'.
// 'yargs' se utiliza para manejar los argumentos que se pasan por la línea de comandos.
const argv = require('./config/yargs3.js');
// Limpia la consola antes de empezar el programa, para que no haya mensajes previos en la terminal.
console.clear();
// Muestra en la consola el contenido del objeto 'argv', que contiene los argumentos de la línea de comandos.
console.log(argv);
// Llama a la función 'crearArchivo' pasando como parámetros los valores de 'base' (argv.b), 'listar' (argv.l) y 'hasta' (argv.h) obtenidos de los argumentos.
// 'crearArchivo' es una promesa, así que cuando se resuelve exitosamente, muestra el nombre del archivo creado en la consola con el efecto 'rainbow' (colores de arcoíris).
// Si la promesa falla, se captura el error con 'catch' y lo imprime en la consola.
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado')) // Muestra el nombre del archivo creado con el efecto 'rainbow'.
    .catch(err => console.log(err)); // Captura e imprime cualquier error que ocurra durante la creación del archivo.
