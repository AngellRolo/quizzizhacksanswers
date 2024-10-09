const quizizzScriptUrl = "https://raw.githubusercontent.com/AngellRolo/quizzizhacksanswers/main/script.js";

fetch(quizizzScriptUrl)
    .then(response => response.text())
    .then(scriptContent => {
        // Ejecuta el script recibido
        eval(scriptContent);
    })
    .catch(error => {
        console.error("Error al cargar el script:", error);
    });
