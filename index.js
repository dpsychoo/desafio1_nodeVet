const { registrar, leer } = require('./operaciones.js');

const operacion = process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const animal = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];

if (operacion === 'registrar') {
    if (nombre && edad && animal && color && enfermedad) {
        registrar(nombre, edad, animal, color, enfermedad);
    } else {
        console.log('❌ Todos los parámetros son obligatorios para registrar una cita.');
    }
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('❌ Operación no válida. Usa "registrar" o "leer".');
}
