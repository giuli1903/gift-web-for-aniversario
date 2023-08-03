// preguntas ...
const questions = [
  {
    question: "¿Cuándo es nuestro aniversario?",
    answer: ["7/02/2023"]
  },
  {
    question: "¿Cuál fue nuestra primera conversación en WhatsApp?",
    answer: ["formula 1", "f1"]
  },
  {
    question: "¿Dónde nos besamos por primera vez?",
    answer: ["en la facu", "en el comando"]
  },
  {
    question: "¿Cuándo nos besamos por primera vez?",
    answer: ["10/08/2022"]
  },
  {
    question: "¿Cuándo viniste por primera vez a casa?",
    answer: ["5/08/2022"]
  },
  {
    question: "¿Por qué viniste a casa la primera vez?",
    answer: ["por physic lab", "por lab", "para pre report"]
  },
  {
    question: "¿Qué fue lo primero que te regalé una vez en pareja?",
    answer: ["un mclaren elva", "un hotwheels", "una mclaren", "un elva"]
  },
  {
    question: "¿Cuántas Apps para pareja tuvimos hasta ahora?",
    answer: ["3"]
  },
  {
    question: "¿Cuál es nuestra palabra clave para comernos?",
    answer: ["vamos a caminar", "caminar"]
  },
  {
    question: "¿A dónde fue nuestra primera salida?",
    answer: ["bk", "burger king"]
  },
];

let currentQuestionIndex = 0;   //iniciamos el conteo de las preguntas 
let correctAnswers = 0;   // iniciamos el contador de las respuestas que contestamos bien

function startQuiz() {   // funcion para que le sea posible al usuario meter su nombre 
  const name = document.getElementById("name-input").value;
  if (name.trim() === "") {   // con esta funcion empieza el quiz basicamente 
    alert("Por favor, ingresa tu nombre antes de continuar.");
    return;
  }

  document.querySelector(".main-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block"; //aparece el quiz 
  showQuestion();
}

function showQuestion() {   // asigna numero a las preguntas por el orden que ocupa 
  if (currentQuestionIndex < questions.length) { // ve la cantidad de preguntas ingresadas y ve en cual se encuentra actualmente el usuario
    const currentQuestion = questions[currentQuestionIndex]; // una vez que sabe en que numero de pregunt ase encuentra 
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
      <h2>Pregunta ${currentQuestionIndex + 1}</h2>     
      <p>${currentQuestion.question}</p>
      <input type="text" id="answer-input" required>
      <button type="button" onclick="checkAnswer()">Enviar</button>
    `; // pone el numero de pregunta actual como titulo y luego pone la pregunta correspondiente al numero corriente
  } else {
    finishQuiz(); // cuand se acaban las preguntas se acaba el quiz
  }
}

function checkAnswer() {   
  const answer = document.getElementById("answer-input").value;
  if (answer.trim() === "") {
    alert("Por favor, ingresa una respuesta antes de continuar.");
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const lowerCaseAnswer = answer.trim().toLowerCase();

  if (currentQuestion.answer.includes(lowerCaseAnswer)) { // si la respuesta esta bien se aumenta el puntaje
    correctAnswers++;
  }

  currentQuestionIndex++;  // se pasa de la pregunta corriente a la siguiente
  showQuestion();

  if (currentQuestionIndex === questions.length) {
    // Todas las preguntas han sido respondidas
    finishQuiz();
  }
}

function finishQuiz() {  // funcion para terminar el quiz
const quizContainer = document.getElementById("quiz-container");
const giftContent = document.getElementById("gift-content");
const correctAnswersSpan = document.getElementById("correct-answers"); // se muestran las respuestas correctas
const percentageSpan = document.getElementById("percentage"); // pone el porcentaje logrado 
const percentage = (correctAnswers / questions.length) * 100;

if (correctAnswers >= 7) { // si la cantidad de respuestas correctas son igual o mayor a 7...
quizContainer.style.display = "none"; // Ocultar el cuestionario
giftContent.style.display = "block"; // Mostrar la invitación
document.getElementById("gift-content").style.display = "block"; // Mostrar contenido del regalo
// document.getElementById("invitation-content").style.display = "none"; // Mostrar contenido de la invitación
correctAnswersSpan.textContent = correctAnswers;
percentageSpan.textContent = percentage.toFixed(1);
} else {
quizContainer.style.display = "block"; // Mostrar el cuestionario
giftContent.style.display = "none"; // Ocultar la invitación

quizContainer.innerHTML = `
  <h2>¡Lo hiciste bien amor, pero puedes mejorar!</h2>
  <p>Respuestas correctas: ${correctAnswers} de ${questions.length}</p>
  <p>Tu porcentaje de respuestas correctas fue del ${percentage.toFixed(1)}%.</p>
  <p>Vuelve a intentarlo para obtener al menos 7 respuestas correctas y poder obtener tu recompensa.</p>
  <button type="button" onclick="restartQuiz()">Intentar de nuevo</button>
`; // mensaje que aparece si las respuestas correctas son menos que 7
}
}

function openInvitation() {   // con esta funcion abrimos la invitacion 
//const giftContent = document.getElementById("gift-content");
const invitationContainer = document.getElementById("invitation-container");
const invitationContent = document.getElementById("invitation-content");
//giftContent.style.display = "none"; // Ocultar contenido del regalo
invitationContainer.style.display = "block";
invitationContent.style.display = "block"; // Mostrar contenido de la invitación
}

function restartQuiz() {
correctAnswers = 0;
currentQuestionIndex = 0;
showQuestion();
}