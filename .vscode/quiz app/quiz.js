const questionBank = [
    {
        question:"What is the capital of France?",
        options:["Paris","London","Berlin","Madrid"],
        answer:"paris",
    },
    {
        question:"What is the Largest planet in our solar?",
        options:["Mars","Saturn","Jupiter","Neptune"],
        answer:"Jupiter",
    },
    {
        question:"What country won the FIFA World Cup in 2018?",
        options:["Brazil","Germany","France","Argentina"],
        answer:"France",
    },
]
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
//get the 3 button from html
const submitButton = document.getElementById("submit");
const retryButton = document.getElementById("retry");
const showAnswerButton = document.getElementById(showAnswer) 

// keeping track of the question,score and answer
let currentQuestion = 0;
let score = 0;
let incorrectAnswer = [];

function displayQuestion(){
    const questionData = questionBank[currentQuestion];
    
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = questionBank.question;

    const optionsElement = document.createElement("div");
    optionsElement.className = "options";

    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions); 

    for (let i = 0; i < shuffledOptions.length; i++) {
        const option = document.createElement("label");
        option.className = "option";

        // radio for each option
        const radio = document.createElement("input")
        radio.type = "radio";
        radio.name = "quiz";
        radio.value = shuffledOptions[i];
        const optionText = document.createTextNode
        (shuffledOptions[i]);

        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
    }
    quizContainer.innerHTML ="";
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}
