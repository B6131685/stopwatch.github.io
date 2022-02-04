window.onload = function(){

    let seconds = 00;
    let tens = 00;
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("seconds")
    let buttonStart = document.getElementById("button-start")
    let buttonStop = document.getElementById("button-stop")
    let buttonReset = document.getElementById("button-reset")
    let Interval;
    let Interval2;
    let state = false;
    buttonStop.disabled = true;


    buttonStart.onclick = () => {
        console.log("start button");
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
        buttonStop.disabled = false;
        buttonStart.disabled = true;
    }

    buttonStop.onclick = () => {
        console.log(state);
        if( state == false){
            stopCounting();
        }else if( state == true){
            continueCounting();
        }
    }

   

    buttonReset.onclick = () => {
        clearInterval(Interval);
        clearInterval(Interval2);
        buttonStop.innerHTML = "Stop";
        state = false;
        tens = "00";
        seconds = "00";
        appendTens.innerHTML =  tens;
        appendSeconds.innerHTML = seconds;
        buttonStart.disabled = false;
        buttonStop.disabled = true;
    }

     function stopCounting(){
        console.log("1");
        buttonStop.innerHTML = "continue";
        state = true;
        clearInterval(Interval);
        clearInterval(Interval2);
        buttonStart.disabled = true;
    }

    function continueCounting(){
        console.log("2");
        buttonStop.innerHTML = "Stop";
        state = false;
        startTimer();
        Interval2  = setInterval(startTimer,10);
        buttonStart.disabled = true;
    }

    const startTimer = function(){
        tens++;

        if( tens < 9){
            appendTens.innerHTML = "0" + tens;
        }

        if( tens > 9){
            appendTens.innerHTML = tens;
        }   

        if(tens > 99){
            seconds++;
            appendSeconds.innerHTML = "0"+ seconds;
            tens = 0;
            appendTens.innerHTML = "0"+0;
        }

        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}