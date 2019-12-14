let textField = document.getElementById("text");
let isEmptyIndicator = true;
let radioButton = document.getElementById("radio1");
let resultWritten = false;
let deCipherItemExists = false;

window.addEventListener("keydown",(event)=>{
	if(event.key =="Enter"){
		let p = document.createElement("p");
		if(textField.value==""){		
			if(isEmptyIndicator){
			let wrapper = document.getElementById("wrapper");
			
			p.style = 'font-size:15px;color:red;';
			p.innerHTML = "! Поле не должно быть пустым";
			wrapper.append(p);
			isEmptyIndicator = false;
		}
		}
		else{
			if(!resultWritten){
			if(p.innerHTML != ""){
				p.innerHTML = "";
			}
			let result = document.createElement("p");
			let inputDeCipher = document.createElement("input");
			result.style = "font-size:20px;color:green;border:solid green 2px;width:300px;margin: 0 auto";
			result.innerHTML = CesarCipher(textField.value);
			inputDeCipher.value = "Дешифровать";
			inputDeCipher.type = "button";
			inputDeCipher.style = "width:150px;height:25px;margin:0 auto;font-size:15px;";

			inputDeCipher.onclick = ()=> {
				if(!deCipherItemExists){
				let deCipherItem = document.createElement("p");
				deCipherItem.style = "font-size:20px;color:orange;border:solid orange 2px;width:300px;margin: 0 auto";
				deCipherItem.innerHTML = textField.value;
				wrapper.append(deCipherItem);
				deCipherItemExists = true;
				}
			}

			wrapper.append(result);
			wrapper.append(inputDeCipher);
			resultWritten = true;
		}
		}
	}

});
function CesarCipher(str,key = 4){
	let alphabet, alphabetUpperCase;
	let letters = str.split('');
	let result = [];
	let digits = "0123456789";
	if(radioButton.checked){
		alphabet = "abcdefghijklmnopqrstuvwxyz";
		alphabetUpperCase = alphabet.toUpperCase();

	}
	else{
		alphabet = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя";
		alphabetUpperCase = alphabet.toUpperCase();
		alert(alphabet.length);
	}
	for(let i of letters){
		if(alphabet.indexOf(i) == -1 && alphabetUpperCase.indexOf(i) == -1 && digits.indexOf(i) == -1){
			result.push(i);
			continue;
		}
		if(digits.indexOf(i) + key > digits.length - 1){
			result.push(digits[key - (digits.length - 1 - digits.indexOf(i))-1]);
		}
		else if(digits.indexOf(i) != -1){
			result.push(digits[digits.indexOf(i)+key]);
		}
		else if((alphabetUpperCase.indexOf(i)) + key > alphabetUpperCase.length - 1){
			result.push(alphabetUpperCase[key - (alphabetUpperCase.length - 1 - alphabetUpperCase.indexOf(i))-1]);
		}
		else if (alphabetUpperCase.indexOf(i) != -1) {
			result.push(alphabetUpperCase[alphabetUpperCase.indexOf(i)+key]);
		}
		else if((alphabet.indexOf(i)) + key > alphabet.length - 1){
			result.push(alphabet[key - (alphabet.length - 1 - alphabet.indexOf(i))-1]);
		}
		else{
			result.push(alphabet[alphabet.indexOf(i)+key]);
		}
	}

	return result.join('');
}

function CruelSort(str){
	let alphabet, alphabetUpperCase;
	let letters = str.split('');
	let result = [];
	let digits = "0123456789";
	if(radioButton.checked){
		alphabet = "abcdefghijklmnopqrstuvwxyz";
		alphabetUpperCase = alphabet.toUpperCase();

	}
	else{
		alphabet = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя";
		alphabetUpperCase = alphabet.toUpperCase();
		alert(alphabet.length);
	}
	for(let key = 1;i < key.length - 1; i++ ){
		for(let i of letters){
		if(alphabet.indexOf(i) == -1 && alphabetUpperCase.indexOf(i) == -1 && digits.indexOf(i) == -1){
			result.push(i);
			continue;
		}
		if(digits.indexOf(i) + key > digits.length - 1){
			result.push(digits[key - (digits.length - 1 - digits.indexOf(i))-1]);
		}
		else if(digits.indexOf(i) != -1){
			result.push(digits[digits.indexOf(i)+key]);
		}
		else if((alphabetUpperCase.indexOf(i)) + key > alphabetUpperCase.length - 1){
			result.push(alphabetUpperCase[key - (alphabetUpperCase.length - 1 - alphabetUpperCase.indexOf(i))-1]);
		}
		else if (alphabetUpperCase.indexOf(i) != -1) {
			result.push(alphabetUpperCase[alphabetUpperCase.indexOf(i)+key]);
		}
		else if((alphabet.indexOf(i)) + key > alphabet.length - 1){
			result.push(alphabet[key - (alphabet.length - 1 - alphabet.indexOf(i))-1]);
		}
		else{
			result.push(alphabet[alphabet.indexOf(i)+key]);
		}
	}
	}
}







