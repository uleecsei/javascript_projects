document.body.onload = bgDrawing;

function bgDrawing(){
	let canvasBlock = document.getElementsByTagName("canvas")[0];
	let context = canvasBlock.getContext("2d");
	context.lineWidth = 7;
	for (let x = 0; x < 522; x += 127) {
	context.moveTo(x, 522);
	context.lineTo(x, 0);
	}
	for (let y = 0; y < 522; y += 127) {
	context.moveTo(0, y);
	context.lineTo(522, y);
	}
	context.strokeStyle = "#c6abab70";
	context.stroke();
}

let BlockSteps = [4 ,130.5, 130.5 + 127, 130.5 + 127 * 2, 130.5 + 127 * 3];
function CubeConstructor(x,y,value,color){
	this.x = BlockSteps[x];
	this.y = BlockSteps[y];
	this.width = 119;
	this.height = 119;
	this.value = value;
	this.color = color;
	//Прорисовка появления игрового блока
	this.appearance = function cubeAppearance(x = this.x,y = this.y,value = this.value){
	//Прорисовка числа внутри игрового блока
	function blockValueDraw(x,y,fontSize = 60,value){
		let textBlock = document.getElementsByTagName("canvas")[0];
		let text = textBlock.getContext("2d");
		text.fillStyle = "white";
		text.font = `${fontSize}px Roboto Condensed`;
		text.fillText(`${value}`, x, y, 100);		
	}
	let width = 0;
	let height = 0;
	let fontSize = 0;
	let startX = x + 62;
	let startY = y + 62;
	function drawingCubeAppeareance(){
	let canvasBlock = document.getElementsByTagName("canvas")[0];
	let context = canvasBlock.getContext("2d");
	context.fillStyle = "#c6abab70";
	context.clearRect(startX,startY,width,height);
	bgDrawing();
	if(startX > x  && startY > y){
		startX-=5;
		startY-=5;
	}
	else{
		startX = x;
		startY = y;
	}
	context.fillRect(startX,startY,width,height);
	if(width < 118 && height < 118){
		width+=10;
		height+=10;
	}
	else{
		width = 119;
		height = 119;
	}
	blockValueDraw(x + 45,y + 80,fontSize,value);
	if(fontSize < 59){
		fontSize+=4;
	}
	else{
		fontSize = 60;
	}
	window.requestAnimationFrame(drawingCubeAppeareance);

    }
    drawingCubeAppeareance();
}
;
}

//Взаимодействие с клавиатурой
function moveLeft(cube){
	let cubeBlock = document.getElementsByTagName("canvas")[0];
	let ctxCube = cubeBlock.getContext("2d");
	ctxCube.fillRect(cube.x++,cube.y,cube.width,cube.height);
	window.requestAnimationFrame(moveLeft);
}
function moveRight(){}
function moveUp(){}
function moveDown(){}
let cube1 = new CubeConstructor(1,2,3);
cube1.appearance();
document.addEventListener("keydown",function Controlls(event){

	switch(event.key){
		case "ArrowLeft":
		moveLeft(cube1);
		break;
		case "ArrowRight":
		moveRight();
		break;
		case "ArrowUp":
		moveUp();
		break;
		case "ArrowDown":
		moveDown();
		break;
	}

});


