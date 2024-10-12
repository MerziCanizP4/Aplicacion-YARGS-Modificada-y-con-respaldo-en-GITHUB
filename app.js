/**
 * Hacer un programa en consola que imprima la tabla del cinco 
 * de forma automática
 */
// Declaración de la variable 'base' que contiene el número de la tabla que queremos imprimir.
let base = 5;
// Limpia la consola para evitar que haya información previa al ejecutar el programa.
console.clear();
// Se declara una función llamada 'tabla' que toma la variable 'base' como parámetro.
const tabla = (base) => {
    // Inicializa la variable 'resultado' como un string vacío para almacenar la tabla.
    let resultado = '';
    // Imprime en la consola el título de la tabla que se va a mostrar, usando 'template literals' para incluir el valor de 'base'.
    console.log(`----Tabla del ${base} ----`);
    // Bucle 'for' que recorre del 1 al 9 (porque 'i' es menor que 10), generando las multiplicaciones.
    for (let i = 1; i < 10; i++) {
        // Para cada valor de 'i', se genera una cadena que representa la multiplicación y el resultado, y se agrega a 'resultado'.
        resultado = resultado + `${base} x ${i} = ${base * i}\n`;
    }
    // Retorna el resultado completo con todas las multiplicaciones generadas.
    return resultado;
}
// Imprime el resultado de la función 'tabla' para la base 5.
console.log(tabla(base));
// Limpia de nuevo la consola.
console.clear();
// Imprime una cabecera más sencilla para la tabla del 5.
console.log('====================');
console.log(' Tabla del 5 ');
console.log('====================');
// Bucle 'for' que recorre del 1 al 9 e imprime cada multiplicación directamente en la consola.
for (let i = 1; i < 10; i++) {
    // Usa 'template literals' para mostrar la operación y su resultado en cada iteración.
    console.log(`${base} x ${i} = ${base * i}`);
}
