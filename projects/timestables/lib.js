/*
	This is a messy script that will quickly become hard to manage
*/

//Global Variables
var canvas;
var display;
var loop;
var lastUpdate;
var x1;
var x2;
var but;
var reveal;
var google;
var ans = '?';

function init(){
	//Setup require objects
	canvas=document.getElementById('myCanvas');
	display=canvas.getContext('2d');
	begin();
	but=document.getElementById('new');
	but.addEventListener('click', function(){makeX();})
	reveal=document.getElementById('reveal');
	reveal.addEventListener('click', function(){ revealFun();})
	google=document.getElementById('google')
	google.addEventListener('click', function(){location.replace("https://google.com")})
}

function begin(){
	//Launch
	lastUpdate=Date.now();

	loop=setInterval(mainLoop,0);

}

function makeX() {
	x1 = Math.floor(Math.random()*12)+1;
	x2 = Math.floor(Math.random()*12)+1;
	ans = '?';
}

function revealFun() {
	ans = x1*x2;
}

function mainLoop(){
	//Get time since last refresh
	var tick=Date.now()-lastUpdate;
	display.beginPath();
	
	//Clear the display
	display.fillStyle = '#7b0094';
	display.fillRect(0, 0, canvas.width, canvas.height);	
	display.fillStyle = '#fff';
	display.font="60px arial";
	//Add items that you want to draw here
	display.fillText('what is ' + x1 + ' X ' + x2 + ' = ' + ans, 300, (canvas.height/2));
	
	//Draw to the display	
	display.stroke();
}