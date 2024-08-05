const hiladosNaturales = [
    { nombre: "Mecha Pura Lana" },
    { nombre: "Corderito" },
    { nombre: "Cordón Premium" },
    { nombre: "Hilo Peruano" }
];
const hiladosSinteticos = [
    { nombre: "Hilado Sedificado" },
    { nombre: "Cashmilon 4/7" },
    { nombre: "Mecha Semigorda" },
    { nombre: "Mecha Sedificada" }
]



// Función para dar la bienvenida al comprador
function bienvenidaComprador() {
    const nombre = prompt('¡Hola, te damos la bienvenida a Hilados Arachne! ¿Cuál es tu nombre?');

    // Verificar si el usuario ingresó un nombre
    if (nombre) {
        // Mostrar un mensaje de bienvenida personalizado
        alert("¡Mucho gusto, " + nombre + "! Estamos encantados de tenerte aquí.");

        // Preguntar al usuario qué producto le interesa
        const interes = prompt("¿Qué tipo de hilado te interesa? (Escribe 'natural' o 'sintético')");

        // Mostrar una respuesta basada en la elección del usuario
        if (interes === 'natural') {
            alert('¡Genial! Tenemos una gran selección de hilados naturales. Echa un vistazo a nuestras últimos ingresos por consola');
            console.table(hiladosNaturales);

        } else if (interes === 'sintético') {
            alert('¡Perfecto! Explora nuestras ofertas en hilados sintéticos por consola');
            console.table(hiladosSinteticos);
        } else {
            alert('¡No te preocupes! Tenemos muchas otras cosas interesantes para ti.');
        }
    } else {
        // Si el usuario no ingresó un nombre
        alert('Parece que no has ingresado un nombre. ¡No te preocupes, sigue navegando por nuestro sitio!');
    }
}

bienvenidaComprador();



