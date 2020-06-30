// Countdown clock
var secondsleft = 90;
var timerInterval = setInterval(function () {
    secondsleft--;
    document.getElementById("countdowntimer").textContent = secondsleft;
    if (secondsleft <= 0)
        clearInterval(timerInterval);
}, 1000);

// Handling of questions
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

// Pull question
Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

// Handle end of quiz
Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
}

// Is guess correct?
Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }

   // Pull next question
    this.questionIndex++;
}

// Question parameters
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// If answer is correct
Question.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
   }

// Start quiz
function populate() {
    if (quiz.isEnded()) {
        showScores();
    }

    else {
        // show Question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show Choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("button" + i, choices[i]);
        }

        showProgress();
    }
};

// When button is clicked, pull next question
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

// Progress of quiz at bottom of quiz
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    elememt.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.question.length;
}

// Show score at end of quiz
function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id = 'score'> Your scores " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

// Questions
var questions = [
    new Question("1. What does javaScript provide to code?", ["a. Curb Appeal", "b. Functionality", "c. The Foundation", "d. None of the above"], "b."),
    new Question("2. What is a simple defintion of javaScript?", ["a. JavaScript gives web pages interactive elements that engage a user.", "b. JavaScript gives structure and style to web pages.", "c. JavaScript defines rules for the construction of a document.", "d. None of the Above"], "a."),
    new Question("3. What are commonly used in computer programs to organize data so that a related set of values can be easily sorted or searched?", ["a. Functions", "b. Objects", "c. Arrays", "d. None of the above"], "c."),
    new Question("4. The following is an example of what? for (var i=0, i < userlength, i++)", ["a. Function", "b. Array", "c. Object", "d. For Loop"], "d."),
    new Question("5. In the following array, what animal is at [animals] = 2?", ["a. Hippo", "b. Giraffe", "c. Undefined", "d. Elephant"], "d."),
    new Question("6. What is a variable?", ["a. A request made by a program or script that performs a predetermined function.", "b. A block of code designed to perform a particular task.", "c. A container for storing data values.", "d. None of the Above"], "c."),
    new Question("7. What is a function call?", ["a. A request made by a program or script that performs a predetermined function.", "b. A special variable, which can hold more than one value at a time.", "c. A method.", "d. None of the Above"], "a."),
    new Question("8. In the following operation what is the value of total?", ["a. 6", "b. 5", "c. 11", "d. 30"], "d."),
    new Question("9. In the folloing function, what will the value of x be??", ["a. 7", "b. Undefined", "c. 1", "d. 12"], "d."),
    new Question("10. Strict equality means values which we are comparing must have the same type, and is represented by which operator?", ["a. ===", "b. =", "c. ==", "d. >="], "a."),
];

var quiz = new Quiz(questions);

populate();