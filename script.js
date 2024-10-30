const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 0
    },
    // Add more questions here
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach((choice, index) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "choice";
        input.value = index;
        li.appendChild(input);
        li.appendChild(document.createTextNode(choice));
        choicesElement.appendChild(li);
    });
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        const userAnswer = parseInt(selectedChoice.value);
        if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
    submitButton.textContent = "Retake Quiz";
    submitButton.onclick = () => {
        currentQuestionIndex = 0;
        score = 0;
        displayQuestion();
        submitButton.textContent = "Submit";
    };
}

displayQuestion();
submitButton.addEventListener("click", checkAnswer);