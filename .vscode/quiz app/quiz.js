const questionBank = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
    },
    {
        question: "What is the largest planet in our system?",
        options: ["Mars", "Saturn", "Jupiter", "Neptune"],
        answer: "Jupiter",
    },
    {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Brazil", "Germany", "France", "Argentina"],
        answer: "France",
    },
    
];
//the question div
const quizContainer = document.getElementById("quiz");
//the result div
const resultContainer = document.getElementById("result");
//get the 3 button from html
const submitButton = document.getElementById("submit");
const retryButton = document.getElementById("retry");
const showAnswerButton = document.getElementById("showAnswer");

//Keeping track of the question, score and answer
let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function displayQuestion(){
    const questionData = questionBank[currentQuestion];

    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = questionData.question;

    const optionsElement = document.createElement("div");
    optionsElement.className = "options";

    function shuffleArray(array) {
        for (let i= array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i +1));
            [array[i]], [array[j]] = [array[j], array[i]];
        }
    }

    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
    for (let i = 0; i < shuffledOptions.length; i++){
        const option = document.createElement("label");
        option.className = "option";

        //Radio for each option
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.value = shuffledOptions[i];
        const optionText = document.createTextNode
        (shuffledOptions[i]);

        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
    }
    quizContainer.innerHTML = "";
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}
function checkAnswer(){
    const selectedOption = document.querySelector
    ('input[name="quiz"]:checked');
    if(selectedOption){
        const answer = selectedOption.value;
        if(answer === questionBank[currentQuestion].answer){
            score++;

        }else {
            incorrectAnswers.push({
                question: questionBank
                [currentQuestion].question, 
                incorrectAnswer: answer,
                correctAnswer: questionBank[currentQuestion].answer,
            });
        };
        currentQuestion++;
        selectedOption.checked = false;
        if (currentQuestion < questionBank.length){
            displayQuestion();
        }else{
            displayResult();
        }
    };
}
function displayResult(){
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    retryButton.style.display = "inline-block";
    showAnswerButton.style.display = "inline-block";
    resultContainer.innerHTML = `Your Score is ${score} out of ${questionBank.length}`;
}
function retryQuiz(){
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = "block";
    submitButton.style.display = "inline-block";
    retryButton.style.display = "none";
    showAnswerButton.style.display = "none";
    resultContainer.innerHTML = "";
    displayQuestion();
}
function showAnswer() {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    retryButton.style.display = "inline-block";
    showAnswerButton.style.display = "none";

    let incorrectAnswersHTML = "";
    for(let i= 0; i< incorrectAnswers. length; i++){
        incorrectAnswersHTML += `
        <p>
        <strong> Question:</strong> ${incorrectAnswers
        [i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers
        [i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers
        [i].correctAnswer}<br>
        </p>
        `;
    }
    resultContainer.innerHTML = `
    <p>You scored ${score} out of ${questionBank.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHTML};
    `;
}
    submitButton.addEventListener("click", checkAnswer);
    retryButton.addEventListener("click", retryQuiz);
    showAnswerButton.addEventListener("click", showAnswer);
displayQuestion();