const fs = require('fs');

// Función para registrar una nueva cita
function registrar(nombre, edad, animal, color, enfermedad) {
    const nuevaCita = { nombre, edad, animal, color, enfermedad };

    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log('✅ Cita registrada correctamente');
}

function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log('📋 Lista de citas:');
    console.log(citas);
}

module.exports = { registrar, leer };
