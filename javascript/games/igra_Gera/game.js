document.body.onload = menu;


function menu() {
	ctx.drawImage(bg, 0, 0);
	ctx.fillStyle = "red";
	ctx.font = "60px Impact";
	ctx.fillText("Olexandr eatin' veggies", 200, 80);
	ctx.fillStyle = "#000";
	ctx.font = "30px Impact";
	ctx.fillText("The rules are simple:", 360, 150);
	ctx.fillStyle = "#003300";
	ctx.fillText("Click on ← →", 400, 200);
	ctx.fillText("Make Sasha eat more", 350, 250);
	ctx.fillStyle = "purple";
	ctx.font = "60px Impact";
	ctx.fillText("VEGETABLES", 330, 360);
	ctx.fillStyle = "#000";
	ctx.font = "30px Impact";
	ctx.fillText("Got it??", 420, 500);
	ctx.fillText("What are you waiting for? Press Enter!", 250, 550);
}

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext('2d');

var bg = new Image(949, 790)
var face1 = new Image(100, 200);
var face2 = new Image(100, 200);
var veg1 = new Image(100, 200);
var veg2 = new Image(100, 200);
var veg3 = new Image(100, 200);
var veg4 = new Image(100, 200);
var veg5 = new Image(100, 200);

bg.src = "img/bg.jpg"
face1.src = "img/face.png";
face2.src = "img/face1.png";
veg1.src = "img/veg1.png";
veg2.src = "img/veg2.png";
veg3.src = "img/veg3.png";
veg4.src = "img/veg4.png";
veg5.src = "img/veg5.png";
var veges = [veg1, veg2, veg3, veg4, veg5];

var speed = 5;
var yStartValue = -200;
var geraPos = 450;
var yVegPos = yStartValue;
var xVegPos;
var currentVeg, currentVeg1, currentVeg2;
var score = 0;
var hp = 3;
var yVegPos1 = yStartValue;
var xVegPos1;
var yVegPos2 = yStartValue;
var xVegPos2;
var isVegFalls = false;
var isVeg1Falls = false;
var isVeg2Falls = false;
document.write("<p  id='score'>" + "Score: " + score + " " + "</p>");
var scoreElement = document.getElementById("score");
document.write("<p  id='hp'>" + "hp: " + hp + "</p>");
var hpElement = document.getElementById("hp");
document.addEventListener("keydown", control);

function win(score) {
	if (score == 0) {
		return "What? You didn't eat anything!";
	}
	if (score > 0 && score < 10) {
		return "Nice score";
	} else if (score >= 10 && score <= 20) {
		return "Go green!";
	} else if (score > 20 && score < 30) {
		return "Your healthier now! Good job!";
	} else if (score >= 30 && score < 40) {
		return "Your full of healthy food! You're gonna live 4ever";
	} else if (score >= 40 && score < 100) {
		return "It's time to stop! Eat some meat plz";
	} else if (score >= 100 && score < 150) {
		return "Are you satisfied? You ate all of stuff";
	} else {
		return "VEGETABLES OVERDOSED";
	}
}

function draw() {
	if (hp == 0) {
		alert("The end;( Your score is: " + score + "\n" + win(score));
		hp = 3;
		score = 0;
		yVegPos = yStartValue;
		yVegPos1 = yStartValue;
		yVegPos2 = yStartValue;
		geraPos = 450;
		speed = 6;
		isVegFalls = false;
		isVeg1Falls = false;
		isVeg2Falls = false;
	}
	//Рисовка бэкграунда
	ctx.drawImage(bg, 0, 0);

	//Рисовка головы
	if (Math.random() < 0.5) {
		ctx.drawImage(face1, geraPos, 630, 100, 150);
	} else {
		ctx.drawImage(face2, geraPos, 630, 100, 150);
	}

	if (yVegPos == yStartValue) {
		isVegFalls = true;
		currentVeg = veges[Math.floor(Math.random() * 5)];
		xVegPos = Math.floor(Math.random() * bg.height - veges[0].width);
	}

	if ((Math.floor(Math.random() * (400 - 300 + 1)) + 300 == yVegPos && !isVeg1Falls) ||
		(Math.floor(Math.random() * (400 - 300 + 1)) + 300 == yVegPos && !isVeg1Falls)) {
		isVeg1Falls = true;
		currentVeg1 = veges[Math.floor(Math.random() * 5)];
		xVegPos1 = Math.floor(Math.random() * (bg.height - veges[0].width - veges[0].width + 1)) + veges[0].width;
	}
	if ((Math.floor(Math.random() * (400 - 300 + 1)) + 300 == yVegPos1 && !isVeg2Falls) ||
		(Math.floor(Math.random() * (300 - 200 + 1)) + 200 == yVegPos1 && !isVeg2Falls)) {
		isVeg2Falls = true;
		currentVeg2 = veges[Math.floor(Math.random() * 5)];
		xVegPos2 = Math.floor(Math.random() * (bg.height - veges[0].width - veges[0].width + 1)) + veges[0].width;
	}
	if (isVegFalls && yVegPos <= bg.height + 1) {
		yVegPos += speed;
		VegFall(yVegPos, currentVeg, xVegPos);
	} else {
		yVegPos = yStartValue;
		isVegFalls = false;
	}

	if (isVeg1Falls && yVegPos1 <= bg.height + 1) {
		yVegPos1 += speed;
		VegFall(yVegPos1, currentVeg1, xVegPos1);
	} else {
		yVegPos1 = yStartValue;
		isVeg1Falls = false;
	}

	if (isVeg2Falls && yVegPos2 <= bg.height + 1) {
		yVegPos2 += speed;
		VegFall(yVegPos2, currentVeg2, xVegPos2);
	} else {
		yVegPos2 = yStartValue;
		isVeg2Falls = false;
	}

	//Проверка на касание к голове
	if (isVegFalls) {
		if ((yVegPos + currentVeg.height >= 630 && xVegPos + currentVeg.width >= geraPos &&
				xVegPos + currentVeg.width <= geraPos + face1.width) ||
			(yVegPos + currentVeg.height >= 630 &&
				xVegPos <= geraPos + face1.width && xVegPos >= geraPos)) {
			score += 1;
			yVegPos = yStartValue;
		}
	}
	if (isVeg1Falls) {
		if ((yVegPos1 + currentVeg1.height >= 630 && xVegPos1 + currentVeg1.width >= geraPos &&
				xVegPos1 + currentVeg1.width <= geraPos + face1.width) ||
			(yVegPos1 + currentVeg1.height >= 630 &&
				xVegPos1 <= geraPos + face1.width && xVegPos1 >= geraPos)) {
			score += 1;
			yVegPos1 = yStartValue;
		}
	}
	if (isVeg2Falls) {
		if ((yVegPos2 + currentVeg2.height >= 630 && xVegPos2 + currentVeg2.width >= geraPos &&
				xVegPos2 + currentVeg2.width <= geraPos + face1.width) ||
			(yVegPos2 + currentVeg2.height >= 630 &&
				xVegPos2 <= geraPos + face1.width && xVegPos2 >= geraPos)) {
			score += 1;
			yVegPos2 = yStartValue;
		}
	}
	if (score == 10) {
		speed = 6;
	}
	if (score == 20) {
		speed = 7;
	}
	if (score == 30) {
		speed = 8;
	}
	if (score == 40) {
		speed = 9;
	}

	scoreElement.innerHTML = "Score: " + score;
	hpElement.innerHTML = "hp: " + hp;
	window.requestAnimationFrame(draw);
}

function VegFall(ypos, vegType, xpos) {
	if (ypos <= bg.height) {
		ctx.drawImage(vegType, xpos, ypos, 100, 200);
	} else {
		ypos = yStartValue;
		hp--;
	}

}
//document.body.onload = draw;
var enterCount = 0;

function control(e) {
	switch (e.keyCode) {
		case 13:
			enterCount++;
			if (enterCount < 2) {
				draw();
			}
			break;
		case 37:
			if (geraPos > 0)
				geraPos -= 35;
			break;
		case 39:
			if (geraPos < bg.width - face1.width)
				geraPos += 35;
			break;
	}
}