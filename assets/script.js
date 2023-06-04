const quizData = [
    {
        question: "1?",
        options: ["1", "2", "3", "4"],
        answer: 0,
    },
    {
        question: "2?",
        options: ["1", "2", "3", "4"],
        answer: 1
    },
    {
        question: "3?",
        options: ["1", "2", "3", "4"],
        answer: 0,
    },
    {
        question: "4?",
        options: ["1", "2", "3", "4"],
        answer: 0,
    },
    {
        question: "5?",
        options: ["1", "2", "3", "4"],
        answer: 0,
    },
];


//getters
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const optionContainer = document.getElementById("option-container");
const submitButton = document.getElementById("submit-btn");
const resultContainer = document.querySelector("#result-container");
const restart = document.getElementById("again");

// variables
let currentQuestion = 0;
let score = 0;
restart.style.visibility = "hidden";

//load question function
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;
    optionContainer.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.innerText = option.option;
      optionElement.addEventListener("click", () => selectOption(index));
      optionContainer.appendChild(optionElement);
    });
  }