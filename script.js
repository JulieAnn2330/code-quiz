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
    const rbs = document.querySelectorAll('input[name="choice"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    alert(Correct);
};