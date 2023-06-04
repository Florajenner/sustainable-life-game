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

  //answer selection function
  function selectOption(optionIndex) {
    /*
    This function is called when the user selecs an answer
    */
    const currentQuizData = quizData[currentQuestion];
    // check if the option selected is the answer held in quizData
    if (optionIndex === currentQuizData.answer) {
      score ++;
      console.log('hey that right!');
      console.log('score: ', score);
    } else {
      console.log('got got that wrong!');
    }
    showNextQuestion();
  }


//function to show next question
  function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }

//function to show result
    function showResult() {
        quizContainer.style.display = "none";
        resultContainer.innerText = `You scored ${score} out of ${quizData.length}`;
        resultContainer.style.display = 'block';
        restart.style.visibility = 'visible';
      }
      
//function to shuffle questions
      function shuffleQuizData() {
        for (let i = quizData.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
        }
      }
     