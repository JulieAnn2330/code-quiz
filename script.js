    var timeleft = 90;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);

const btn = document.querySelector('#btn');
// handle click button
btn.onclick = function () {
    const rbs = document.querySelectorAll('input[name="one"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    alert(selectedValue);
};

//Store the total number of questions
var totalQuestions = $('.questions').size();

//Set the current question to display to 1
var currentQuestion = 0;

//Store the selector in a variable.
//It is good practice to prefix jQuery selector variables with a $
$questions = $('.questions');

//Hide all the questions
$questions.hide();

//Show the first question
$($questions.get(currentQuestion)).fadeIn();

//attach a click listener to the HTML element with the id of 'next'
$('#next').click(function () {

     //fade out the current question,
     //putting a function inside of fadeOut calls that function 
     //immediately after fadeOut is completed, 
     //this is for a smoother transition animation
     $($questions.get(currentQuestion)).fadeOut(function () {

        //increment the current question by one
        currentQuestion = currentQuestion + 1;

        //if there are no more questions do stuff
        if (currentQuestion == totalQuestions) {

            var result = sum_values()

            //do stuff with the result
            alert(result);

        } else {

            //otherwise show the next question
            $($questions.get(currentQuestion)).fadeIn();

        }
    });

});