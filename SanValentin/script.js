document.getElementById("recibir-carta").addEventListener("click", function() {
    document.getElementById("cartero").classList.add("hidden");
    document.getElementById("texto-inicial").classList.add("hidden");
    this.classList.add("hidden");
    document.getElementById("carta-cerrada").classList.remove("hidden");
    document.getElementById("instruccion-carta").classList.remove("hidden");
});

document.getElementById("carta-cerrada").addEventListener("click", function() {
    this.classList.add("hidden");
    document.getElementById("instruccion-carta").classList.add("hidden");
    document.getElementById("carta-abierta").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("btn-propuesta").classList.remove("hidden");
    }, 4000);
});

document.getElementById("btn-propuesta").addEventListener("click", function() {
    document.getElementById("carta-abierta").classList.add("hidden");
    this.classList.add("hidden");
    document.getElementById("propuesta").classList.remove("hidden");
});

let estado = 0;
const pregunta = document.getElementById("pregunta");
const imagenPregunta = document.getElementById("imagen-pregunta");

document.getElementById("btn-no").addEventListener("click", function() {
    pregunta.textContent = "Me rompe el corazón 💔";
    imagenPregunta.src = "images/corazon-roto.jpeg";

    document.getElementById("btn-si").textContent = "Otra oportunidad";
    document.getElementById("btn-no").classList.add("hidden");

    estado = -1; // Marca un estado especial para reiniciar
});

document.getElementById("btn-si").addEventListener("click", function() {
    if (estado === -1) {
        // Reiniciar la pregunta inicial
        estado = 0;
        pregunta.textContent = "¿Me daría el honor de ser su San Valentín? 💘";
        imagenPregunta.src = "images/Pregunta1.jpeg";
        
        // Mostrar botón "No" de nuevo
        document.getElementById("btn-no").classList.remove("hidden");
        this.textContent = "Sí 💕"; // Restaurar texto original del botón
        return;
    }

    const opciones = [
        { texto: "¿Está segura? 💍", imagen: "images/pregunta2.jpeg" },
        { texto: "¿Segura? No hay devolución. 😉", imagen: "images/pregunta3.jpeg" },
        { texto: "¡Sin reembolso! 😆", imagen: "images/pregunta4.jpeg" },
        { texto: "Muchas gracias por darme el honor, Preciosa 🖤", imagen: "images/pregunta5.jpeg" }
    ];

    if (estado < opciones.length) {
        pregunta.textContent = opciones[estado].texto;
        imagenPregunta.src = opciones[estado].imagen;

        if (estado === opciones.length - 1) {
            document.getElementById("btn-si").classList.add("hidden");
            document.getElementById("btn-no").classList.add("hidden");
        }
        estado++;
    }
});
