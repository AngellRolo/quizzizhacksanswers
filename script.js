// Función para obtener la respuesta correcta para la pregunta actual
function getCorrectAnswer(questionText) {
    // Aquí deberías tener una lógica para determinar la respuesta correcta
    // Por simplicidad, aquí se utilizan respuestas hardcodeadas
    const answers = {
        "¿Cuál es la capital de Francia?": "París",
        "¿Cuántos continentes hay en el mundo?": "7",
        "¿Cuál es el elemento químico con el símbolo O?": "Oxígeno",
        // Agrega más preguntas y respuestas según sea necesario
    };

    return answers[questionText];
}

// Función para responder preguntas
function answerCurrentQuestion() {
    // Selecciona la pregunta actual
    const questionElement = document.querySelector('.question'); // Ajusta el selector según el HTML real
    if (!questionElement) return; // Si no hay pregunta, salir

    const questionText = questionElement.innerText; // Obtiene el texto de la pregunta
    const correctAnswer = getCorrectAnswer(questionText); // Busca la respuesta correcta

    if (correctAnswer) {
        // Encuentra las opciones de respuesta
        const options = document.querySelectorAll('.option'); // Ajusta el selector según el HTML real

        options.forEach(option => {
            if (option.innerText === correctAnswer) {
                option.click(); // Haz clic en la respuesta correcta
            }
        });
    }
}

// Ejecutar la función al cargar la página
setInterval(answerCurrentQuestion, 2000); // Llama a la función cada 2 segundos
