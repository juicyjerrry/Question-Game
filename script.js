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

var qContainer = document.querySelector(".qContainer")

var secondsLeft = 30;
var scoreCount = 0;

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
// to do:
// Set correct answer ?????
// on correct answer add 3 seconds and add 1 point
// on wrong answer display message

//add answerB answerC answerD
answerA.addEventListener("click", function(event)
{
event.preventDefault();

//conceptually, how do I set a value to be correct and not correct
if (value === true) {
    secondsLeft = secondsLeft + 3;
    scoreCount = scoreCount + 1;
};

if (value === false) {
    renderIncorrectMessage()
};

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

showScore();
startClock();