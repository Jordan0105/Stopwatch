let btn = document.getElementsByClassName("submit")[0];
let btn2 = document.getElementsByClassName("button")[1];
let btn3 = document.getElementsByClassName("button")[2];

let text = document.getElementsByTagName("h3")[0];
let hours = 0, minutes = 0, seconds = 0, h = 0, m = 0;

let cont = 0, click = 0;



btn.addEventListener("click", submit);
btn2.addEventListener("click", reset);
btn3.addEventListener("click", stop);

const audio = new Audio('Sound.mp3');

 function submit(){
    let getHours = document.getElementsByTagName("input")[0].value;
    let getMinutes = document.getElementsByTagName("input")[1].value;
    let getSeconds = document.getElementsByTagName("input")[2].value;

    if (getHours == ""){
        hours = 0;
        h = 0;
    }
    else{
        h = parseInt(getHours);
        hours = parseInt(getHours * 3600);
    }

    if (getMinutes == ""){
        minutes = 0;
        m = 0;
    }
    else{
        m = parseInt(getMinutes);
        minutes = parseInt(getMinutes * 60);
    }

    if (getSeconds == ""){
        seconds = 0;
    }
    else{
        seconds = parseInt(getSeconds);
    }
    
    
    cont = hours  + minutes  + seconds;
    if(cont != 0){
        start();

    }

}

let tm;


function stop(){
    clearInterval(tm);
    click = 0;
    cont = 0;
    audio.pause();
}

function reset(){
    stop();
    text.innerHTML = "Time Remaining : " + cont + " seconds"; 
    audio.pause();
}

function start(){

    click += 1;

    if(click <= 1){
    tm = setInterval(restNum, "1000");

    }


}

function restNum(){
    cont -= 1;
    seconds -= 1;
    
    
    if (cont == 0){
        stop();
        text.innerHTML = "Time Remaining : " + cont + " seconds"; 
        
        audio.play();
    }

    else{

        if (seconds == -1){
            m -= 1;
            seconds = 59;
        }
        
        if(m == -1){
            h -= 1;
            m = 59;
        }
        
        if (h > 0){
            text.innerHTML = `Time Remaining : ${h} hours ${m} minutes ${seconds} seconds`; 
         }


        else if (m > 0 && h == 0){
            text.innerHTML = `Time Remaining : ${m} minutes ${seconds} seconds`; 
        }
        else if (m == 0 && h == 0){
            text.innerHTML = `Time Remaining : ${seconds} seconds`; 
        }

        

    }
    
}
