function EngSivulle(){
	window.location = "En";
}
function FinSivulle(){
	window.location = "/";
}
window.onload = function(){
	SnakeGame();
	divAnimations();
 };

////////////////////SnakeGame///////////////////////

 var game;
 var canvas = document.getElementById("kehys");
 var ctx = canvas.getContext("2d");
 var cWidth = canvas.width;
 var cHeight = canvas.height;
 var boxWidth = cWidth/30;
 var boxHeight = cHeight/30;
 var boxWH = 20;
 var points = 0;
 var score = document.getElementById("Pisteet");
 var foodImg = new Image();
 var k;
 foodImg.src = "Kuvat/apple2.png";
 var snake = [];
 snake[0] = {
 x: cWidth/2,
 y: cHeight/2
};

 var food = {
 x: Math.floor(Math.random()*30)*boxWH,
 y: Math.floor(Math.random()*30)*boxWH
};
 var eatSound = new Audio();
 eatSound.src = ("Audio/appleSound.mp3")

document.addEventListener("keydown", direction);
document.addEventListener("keydown", checkEnter);

function direction(event){
	var key = event.keyCode;
if(key == 65 && k != "right"){
	k = "left";
}
else if(key == 68 && k != "left"){
	k = "right";
}
else if(key == 87 && k != "down"){
	k = "up";
}
else if(key == 83 && k != "up"){
	k = "down";
}
}

function SnakeGame(){
		game = setInterval(Draw, 100);
}
//Draw the field and update the snake movement
function Draw(){
	ctx.fillStyle = "green";
	ctx.fillRect(0, 0, cWidth, cHeight);
for(var i = 0; i<snake.length; i++){
	ctx.fillStyle = (i == 0) ? "black" : "white";
	ctx.fillRect(snake[i].x, snake[i].y, boxWH, boxWH);

	ctx.strokeStyle = "red";
	ctx.strokeRect(snake[i].x, snake[i].y, boxWH, boxWH);
}
ctx.drawImage(foodImg, food.x, food.y);

//Snake movement logic, eating and save points

var snakeX = snake[0].x;
var snakeY = snake[0].y;

if(k == "right") snakeX += boxWH;
if(k == "left") snakeX -= boxWH;
if(k == "up") snakeY -= boxWH;
if(k == "down") snakeY += boxWH;

if(snakeX == food.x && snakeY == food.y){
	points++;
	eatSound.play();
	SavePoints(points);
	food = {
  x: Math.floor(Math.random()*30)*boxWH,
  y: Math.floor(Math.random()*30)*boxWH
 }
}else{
	snake.pop();
}

var nHead = {
 x: snakeX,
 y: snakeY
}
//Check end games
	if(snakeX < -20|| snakeX > boxWH*30 ||
		snakeY < -20 || snakeY > boxWH*30){
		Gameover();
	}
	if(CheckSnakeC(nHead, snake)){
		setTimeout(Gameover, 100);
	}
function Gameover(){
	alert("Peli loppui");
	clearInterval(game);
	EmptyWriteCanvas(ctx);
}
snake.unshift(nHead);
}
//Make points to screen
function SavePoints(p){
	document.getElementById("Pisteet").innerHTML = "Pisteet: " + p;
}

//Check snake internal collision
function CheckSnakeC(head, array){
	for(var i = 0; i<array.length; i++){
		if(head.x == array[i].x && head.y == array[i].y){
			return true;
		}
	}return false;
}
//Empty the canvas and make text to it
function EmptyWriteCanvas(c){
	c.clearRect(0, 0, cWidth, cHeight);
	c.font = "24px Arial";
	c.fillStyle = "black";
	c.textAlign = "center";
	c.fillText("Paina enter-näppäintä aloittaaksesi uuden pelin", cWidth/2, cHeight/2);
}
//New game initialization
function checkEnter(e){
	var x = e.keyCode;
	if(x == 13){
		ctx.clearRect(0, 0, cWidth, cHeight);
		var emptyArray = [];
    snake = emptyArray;
		snake[0] = {
	  x: cWidth/2,
	  y: cHeight/2
	 };
	 points = 0;
	 document.getElementById("Pisteet").innerHTML = "Pisteet: 0";
		game = setInterval(Draw, 100);
	}
}
function divAnimations(){
	var section0 = document.getElementsByClassName("section0");
	var section1 = document.getElementsByClassName("section1");
	var section2 = document.getElementsByClassName("section1");
}
