let player1, player2;

document.body.onload = () =>{
	alert("Tick-Tack-Toe - это крестики-нолики по нашему, правила знает даже ребёнок.")
	player1 = prompt("Прежде чем начать, напиши имя игрока 1","player1");
	player2 = prompt("Теперь имя игрока 2","player2");
	alert(player1+" vs "+player2+"\nДа победит сильнейший");
	player1.fontSize = "20px";
	player2.fontFamily = "Darker Grotesque";
	score.innerHTML = `Побед  ${player1}: ${firstPlayerScore}. Побед ${player2}: ${secondPlayerScore}`;
	currentPlayer.innerHTML = "Крестики:" + player1;
}
let currentPlayer = document.getElementById("playa");
let score = document.getElementById("score");
let gameTable = document.getElementById("game");
let gameCubes = document.getElementsByTagName("td");
let xoCheck = true;
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let isFirstPlayer = true;
let winArray = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];
let checkArray = [];


function ticTackfunc(element){
	element.onclick = () =>{
		if(element.innerHTML == ""){
			checkArray = [];
		if(xoCheck){
		element.innerHTML = "X";
		xoCheck = false;
		}
		else {
		element.innerHTML = "O";
		xoCheck = true;
		}
	}
	let withdraw = 0;
	for(i of gameCubes){
		if(i.innerHTML)withdraw++;
		checkArray.push(i.innerHTML);
	}
	
	for(let i = 0;i < winArray.length;i++){
		
		if(checkArray[winArray[i][0]] == "X" && checkArray[winArray[i][1]] =="X" && checkArray[winArray[i][2]]=="X"){
			if(isFirstPlayer){
			victory(player1);
			isFirstPlayer = false;
			firstPlayerScore++;

		}
			else{
				victory(player2);
				isFirstPlayer = true;
				secondPlayerScore++;
			}
			withdraw = 0;
			break;
		}
		if(checkArray[winArray[i][0]] == "O" && checkArray[winArray[i][1]] =="O" && checkArray[winArray[i][2]]=="O"){
			if(!isFirstPlayer){
			victory(player1);
			isFirstPlayer = true;
			firstPlayerScore++;
		}
			else{
				victory(player2);
				isFirstPlayer = false;
				secondPlayerScore++;
			}
			withdraw = 0;
			break;
		}
	}
	score.innerHTML = `Побед  ${player1}: ${firstPlayerScore}. Побед ${player2}: ${secondPlayerScore}`;
	if(withdraw === 9)victory(undefined);
	if(isFirstPlayer){currentPlayer.innerHTML = "Крестики:" + player1;}
	else{currentPlayer.innerHTML = "Крестики:" + player2;}
	}

}
function victory(str){
	if(str){
		alert("На сей раз победа за: "+str);
	}
	else{
		alert("Боевая ничья!");
	}
	for(i of gameCubes)
		
		i.innerHTML = "";
		xoCheck = true;
}

for(element of gameCubes){
	ticTackfunc(element);
}
