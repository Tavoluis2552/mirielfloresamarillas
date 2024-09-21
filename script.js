document.addEventListener("DOMContentLoaded", function() {
    const comenzarBtn = document.getElementById("comenzarBtn");
    const inicioDiv = document.getElementById("inicio");
    const contenidoDiv = document.getElementById("contenido");
    const mensajeBonito = document.getElementById("mensajeBonito");
    const audio = document.getElementById("audio");

    // Botones para cambiar el mensaje
    const btnFuerza = document.getElementById("btnFuerza");
    const btnValentia = document.getElementById("btnValentia");
    const btnLuz = document.getElementById("btnLuz");

    // Reproducir audio automáticamente
    audio.play();

    comenzarBtn.addEventListener("click", () => {
        inicioDiv.style.display = "none";  // Oculta la pantalla de inicio
        contenidoDiv.style.display = "flex";  // Muestra la pantalla de contenido
    });

    // Interacciones de los botones
    btnFuerza.addEventListener("click", () => {
        mensajeBonito.textContent = "Tu fuerza interior es increíble. Nada te detiene.";
    });

    btnValentia.addEventListener("click", () => {
        mensajeBonito.textContent = "Tu valentía me inspira cada día. Eres asombrosa.";
    });

    btnLuz.addEventListener("click", () => {
        mensajeBonito.textContent = "Tu luz ilumina mi vida. Eres pura energía positiva.";
    });
});
