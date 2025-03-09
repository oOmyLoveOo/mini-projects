const display = document.getElementById('display');
const reset = document.getElementById('reset');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

// Crear el canal de comunicación
const channel = new BroadcastChannel('counter');

// Función para actualizar el contador y enviar el nuevo valor a otras pestañas
function updateCounter(value) {
    display.textContent = value;
    channel.postMessage(value); // Enviar mensaje con el nuevo valor
}

// Inicializar el contador con 0 si no hay valor previo
if (!display.textContent) {
    updateCounter(0);
}

// Eventos para modificar el contador
reset.addEventListener('click', () => updateCounter(0));

increment.addEventListener('click', () => updateCounter(parseInt(display.textContent) + 1));

decrement.addEventListener('click', () => updateCounter(parseInt(display.textContent) - 1));

// Escuchar mensajes de otras pestañas
channel.onmessage = (event) => {
    display.textContent = event.data;
};
