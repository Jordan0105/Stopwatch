//HTML Elements

let text = document.getElementById("timer");
let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnReset = document.getElementById("reset");

//Variables

let seconds = 0, minutes = 0, hours = 0;
let interval = null;

let words = '', secondWord = '', minuteWord = '', hourWord = '';

//Functions

function printTimer() {

	if (seconds === 0) {
		secondWord = "";
	}
	else if (seconds === 1) {
		secondWord = `${seconds} second`;
	}
	else if (seconds > 1) {
		secondWord = `${seconds} seconds`;
	}

	minuteWord = minutes === 1 ? `${minutes} minute <br />` : minutes > 1 ? `${minutes} minutes <br />` : '';
	hourWord = hours === 1 ? `${hours} hour <br />` : hours > 1 ? `${hours} hours <br />` : '';


	words = `${hourWord} ${minuteWord}  ${secondWord}`;
	text.innerHTML = words;
}


let timer = function () {

	seconds += 1;
	if (minutes === 59 && seconds === 60) {

		hours += 1;

		minuteWord = '';

		minutes = 0;
		seconds = 0;


	}
	else if (seconds === 60) {
		minutes += 1;
		seconds = 0;
	}

	printTimer();
}

function start() {
	if (interval === null)
		interval = setInterval(timer, 1000);
}

function stop() {
	clearInterval(interval);
	interval = null;
}

function reset() {

	stop();
	seconds = 0;
	minutes = 0;
	hours = 0;

	words = '';
	minuteWord = '';
	secondWord = '';
	hourWord = '';
	text.innerHTML = 'Second: 0';
}

//Event Listeners

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);