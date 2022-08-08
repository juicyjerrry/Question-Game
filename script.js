//Create landing page with start button
// Timer in top right
// Highscore saves
    //enter name for highscores
//multiple choice questions 4 choices
    //If correct, points go up one
    //If incorrect, time goes down 5 seconds
//At timeout, game ends and you are taken to highscore screen where you enter name
//

var score = document.querySelector("#score")
var scoreBoard = document.querySelector("#scoreBoard")

var timerBar = document.querySelector("#timerBar")
var question = document.querySelector("#question")
var result = document.querySelector("#result")

var answerA = document.querySelector("#answerA")
var answerB = document.querySelector("#answerB")
var answerC = document.querySelector("#answerC")
var answerD = document.querySelector("#answerD")

var startButton = document.querySelector("#startButton")


var questionArray = [
    {
        question: "Question 1 Answer A",
        choices: ["answer a", "answer b", "answer c", "answer d"],
        correctAnswer: "Answer a",
    },
    {        
        question: "Question 2 Answer B",
        choices: ["answer a", "answer b", "answer c", "answer d"],
        correctAnswer: "Answer b",

    },

    {   
        question: "Question 3 Answer C",
        choices: ["answer a", "answer b", "answer c", "answer d"],
        correctAnswer: "Answer c",

    },

    {
        question: "Question 4 Answer D",
        choices: ["answer a", "answer b", "answer c", "answer d"],
        correctAnswer: "Answer d",

    },
]; 

var qContainer = document.querySelector(".qContainer")

var secondsLeft = 30;
var scoreCount = 0;
var i = 0;


//❓ Show Question
function showQuestion() {
    question.textContent = questionArray[i].question;
    answerA.textContent = questionArray[i].choices[0];
    answerB.textContent = questionArray[i].choices[1];
    answerC.textContent = questionArray[i].choices[2];
    answerD.textContent = questionArray[i].choices[3];
    answerA.addEventListener("click", nextQuestion)
    answerB.addEventListener("click", nextQuestion)
    answerC.addEventListener("click", nextQuestion)
    answerD.addEventListener("click", nextQuestion)

}

//Next Question

function nextQuestion() {
    console.log(this.innerHTML)
    // i++;
    // showQuestion();
    // if (i >= 3){
    //     showScoreBoard()
    // };
}
//how do i know which one is the correct answer to the question and create a wrong or right result depending on it


//🏀 Score!
function showScore() {
    score.textContent = "Your Score: " + scoreCount
}

//⌚ Timer
function startClock() {
    var timerInterval = setInterval(function() {
    //countdown
    secondsLeft--;
    timerBar.textContent = secondsLeft + " seconds left...";
     //time out
    if(secondsLeft <= 0) {
        //change "final score" to be the name entered by user
        localStorage.setItem("Final Score", scoreCount)
        clearInterval(timerInterval)
        //Take me to enter highscore screen
        showScoreBoard()
        }
    }
    , 1000);
}


// 🔳 Button Function
// 🏁 Start Button
startButton.addEventListener("click", function(event)
{
    var header =  document.querySelector("#header");
    var hide = document.querySelector(".qContainer");

   hide.classList.remove("hide");
   header.classList.add("hide");

   showScore();
   startClock();
   showQuestion();
})
// to do:
// Set correct answer ?????
// on correct answer add 3 seconds and add 1 point
// on wrong answer display message

//add answerB answerC answerD
answerA.addEventListener("click", function(event)
{
event.preventDefault();

})

//❌❌❌ wrong answer
function renderIncorrectMessage() {
    result.textContent = "Incorrect, please try again"
}


//💯 Scoreboard!
function showScoreBoard() {
    timerBar.textContent = ""
    qContainer.textContent = "Final Score: " + scoreCount;
    //TODO: Ask for name, Store scoreCount to that name and display all previous scoreCounts
    var scoreHistory = {

    }

}
// show the scoreboard for me without playing
scoreBoard.addEventListener("click", function(event){
    showScoreBoard();
});
