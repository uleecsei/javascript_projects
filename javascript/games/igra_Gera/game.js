document.body.onload = menu; 


function menu(){
	ctx.drawImage(bg,0,0);
	ctx.fillStyle = "red";
	ctx.font = "60px Impact";
	ctx.fillText("Герасимчук пожиратель елдаков",40,80);
	ctx.fillStyle = "#000";
	ctx.font = "30px Impact";
	ctx.fillText("Правила простые:",360,150);
	ctx.fillStyle = "#003300";
	ctx.fillText("Нажимай на стрелки ← →",310,200);
	ctx.fillText("Заставь Саню поймать как можно больше",200,250);
	ctx.fillStyle = "purple";
	ctx.font = "60px Impact";
	ctx.fillText("Дилдецких",330,320);
	ctx.fillStyle = "#000";
	ctx.font = "30px Impact";
	ctx.fillText("Всё понял??",400,500);
	ctx.fillText("Хули ждёшь? Жми Enter, ёкарный бабай!",220,550);
}
//Audio
var x = new Audio();
x.src = "audio/krotii.m4a";

//Audio
var cvs = document.getElementById("canvas");
 var ctx = cvs.getContext('2d');

var bg = new Image(949,790)
var face1 = new Image(100,200);
var face2 = new Image(100,200);
var dildo1 = new Image(100,200);
var dildo2 = new Image(100,200);
var dildo3 = new Image(100,200);
var dildo4 = new Image(100,200);
var dildo5 = new Image(100,200);

bg.src = "img/bg.jpg"
face1.src = "img/face.png";
face2.src = "img/face1.png";
dildo1.src = "img/dildo1.png";
dildo2.src = "img/dildo2.png";
dildo3.src = "img/dildo3.png";
dildo4.src = "img/dildo4.png";
dildo5.src = "img/dildo5.png";
var dildoes = [dildo1,dildo2,dildo3,dildo4,dildo5];

var speed = 5;
var yStartValue = -200;
var geraPos = 450;
var yDildoPos = yStartValue;
var xDildoPos ;
var currentDildo, currentDildo1 , currentDildo2;
var score = 0;
var hp = 3;
var yDildoPos1 = yStartValue;
var xDildoPos1;
var yDildoPos2 = yStartValue;
var xDildoPos2;
var isDildofalls = false;
var isDildo1falls = false;
var isDildo2falls = false;
document.write("<p  id='score'>"+"Cчёт: "+score+" "+"</p>");
var scoreElement = document.getElementById("score");
document.write("<p  id='hp'>"+"hp: "+hp+"</p>");
var hpElement = document.getElementById("hp");
document.addEventListener("keydown",control);

function win(score){
	if(score == 0){
		return "Давай зачётку, Два по сосанию!";
	}
	if(score>0 &&score <10){
		return "Посасываешь на 3ечку";
	}
	else if(score>=10 && score<=20){
		return "Заглотил(а) как надо, так держать!";
	}
	else if(score>20 && score<30){
		return "Хороший клык! Прямиком в горло";
	}
	else if(score>=30 && score<40){
		return "Да ты настоящая хуесосина!";
	}
	else if(score>=40 && score<100){
		return "Ебать мой хуй ,бывшая это ты???";
	}
        else if(score>=100 && score<150){ return "Бакалавыр миньета!";}
        else {return "Колосальный буравчик!!!!!!"}
} 

function draw(){
	x.play();
	//Условие gameover
	if(hp == 0 ){
		alert("Конец игры! твой рекорд :" + score +"\n" + win(score));
		hp = 3;
		score = 0;
		yDildoPos = yStartValue;
                yDildoPos1 = yStartValue;
                yDildoPos2 = yStartValue;
		geraPos = 450;
		speed = 6;
                isDildofalls = false;
                isDildo1falls = false;
                isDildo2falls = false;
	}
//Рисовка бэкграунда
ctx.drawImage(bg,0,0);

//Рисовка головы
if(Math.random()<0.5){
ctx.drawImage(face1,geraPos,630,100,150);}
else{
ctx.drawImage(face2,geraPos,630,100,150);}

if(yDildoPos ==yStartValue ){
	isDildofalls = true;
	currentDildo = dildoes[Math.floor(Math.random()*5)];
	xDildoPos = Math.floor(Math.random()*bg.height-dildoes[0].width);
}

if((Math.floor(Math.random() * (400 - 300 + 1)) + 300 == yDildoPos && !isDildo1falls)||
	(Math.floor(Math.random() * (400 - 300 + 1)) + 300 == yDildoPos && !isDildo1falls)){
	isDildo1falls = true;
	currentDildo1 = dildoes[Math.floor(Math.random()*5)];
	xDildoPos1 = Math.floor(Math.random()*(bg.height-dildoes[0].width - dildoes[0].width +1)) + dildoes[0].width ;
}
 if((Math.floor(Math.random() * (400 - 300 + 1)) + 300 == yDildoPos1 && !isDildo2falls) || 
 	(Math.floor(Math.random() * (300 - 200 + 1)) + 200 == yDildoPos1 && !isDildo2falls)){
	isDildo2falls = true;
	currentDildo2 = dildoes[Math.floor(Math.random()*5)];
	xDildoPos2 = Math.floor(Math.random()*(bg.height-dildoes[0].width - dildoes[0].width +1)) + dildoes[0].width ;
}
if(isDildofalls && yDildoPos <= bg.height+1){
	yDildoPos+=speed;
	dildoFall(yDildoPos,currentDildo,xDildoPos);
}
else {
	yDildoPos = yStartValue;
	isDildofalls = false;
}

if(isDildo1falls && yDildoPos1 <=bg.height+1){
	yDildoPos1+=speed;
	dildoFall(yDildoPos1,currentDildo1,xDildoPos1);
}
else {
	yDildoPos1 = yStartValue;
	isDildo1falls = false;
}

if(isDildo2falls && yDildoPos2 <=bg.height+1){
	yDildoPos2+=speed;
	dildoFall(yDildoPos2,currentDildo2,xDildoPos2);
}
else {
	yDildoPos2 = yStartValue;
	isDildo2falls = false;
}

//Проверка на касание к голове
if(isDildofalls){
if((yDildoPos + currentDildo.height >=630 && xDildoPos + currentDildo.width >=geraPos  
	&& xDildoPos + currentDildo.width <=geraPos + face1.width) 
	|| (yDildoPos + currentDildo.height >=630 
	&& xDildoPos <= geraPos+face1.width && xDildoPos >= geraPos)){
	score += 1;
	yDildoPos = yStartValue;
}}
if(isDildo1falls){
if((yDildoPos1 + currentDildo1.height >=630 && xDildoPos1 + currentDildo1.width >=geraPos  
	&& xDildoPos1 + currentDildo1.width <=geraPos + face1.width) 
	|| (yDildoPos1 + currentDildo1.height >=630 
	&& xDildoPos1 <= geraPos+face1.width && xDildoPos1 >= geraPos)){
	score += 1;
	yDildoPos1 = yStartValue;
}}
if(isDildo2falls){
if((yDildoPos2 + currentDildo2.height >=630 && xDildoPos2 + currentDildo2.width >=geraPos  
	&& xDildoPos2 + currentDildo2.width <=geraPos + face1.width) 
	|| (yDildoPos2 + currentDildo2.height >=630 
	&& xDildoPos2 <= geraPos+face1.width && xDildoPos2 >= geraPos)){
	score += 1;
	yDildoPos2 = yStartValue;
}
}
if(score == 10){
	speed = 6;
}
if(score == 20){
	speed = 7;
}
if(score == 30){
	speed = 8;
}
if(score == 40){
	speed = 9;
}

scoreElement.innerHTML = "Cчёт: "+score;
hpElement.innerHTML = "hp: "+hp;
window.requestAnimationFrame(draw);
}
function dildoFall(ypos,dildoType,xpos){
	if(ypos <= bg.height){
	ctx.drawImage(dildoType,xpos,ypos,100,200);}
	else { ypos = yStartValue;
		hp--;
	}

}
//document.body.onload = draw;
var enterCount = 0;
function control(e){
	switch(e.keyCode){
		case 13:
		enterCount++;
		if(enterCount<2){
		draw();}
		break;
		case 37:
		if(geraPos>0)
		geraPos-=35;
		break;
		case 39:
		if(geraPos<bg.width-face1.width)
		geraPos+=35;
		break;
	}
}
