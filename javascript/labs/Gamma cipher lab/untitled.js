let textField = document.getElementById("text");
let isEmptyIndicator = true;
let resultWritten = false;
let deCipherItemExists = false;
let keyElement = document.getElementById("key");

window.addEventListener("keydown",(event)=>{

	if(event.key =="Enter"){
		let p = document.createElement("p");
		if(textField.value==""){		
			if(isEmptyIndicator){
			let wrapper = document.getElementById("wrapper");	
			p.style = 'font-size:15px;color:red;';
			p.innerHTML = "Поле не должно быть пустым!";
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
			result.innerHTML = Gamma(textField.value,keyElement.value);
			inputDeCipher.value = "Дешифровать";
			inputDeCipher.type = "button";
			inputDeCipher.style = "width:150px;height:25px;margin:0 auto;font-size:15px;";

			inputDeCipher.onclick = ()=> {
				if(!deCipherItemExists){
				let deCipherItem = document.createElement("p");
				deCipherItem.style = "font-size:20px;color:orange;border:solid orange 2px;width:300px;margin: 0 auto";
				deCipherItem.innerHTML = deGamma(result.innerHTML,keyElement.value);
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
let arrOfCodes = [];
function Gamma(str, key){
	let newstr = '';
	key = key + "";
	let k = 0;

	for(let i = 0; i < str.length; i++){
		arrOfCodes.push(Number(str.charCodeAt(i)) ^ Number(key.charCodeAt(k)));
		newstr+=String.fromCharCode(Number(str.charCodeAt(i)) ^ Number(key.charCodeAt(k)));
		k++;
		console.log(newstr[i]);	
		if(k > key.length - 1){ k = 0;}
	}
	return newstr;
  }
function deGamma(str, key){
	let newstr = '';
	key = key + "";
	let k = 0;
	for(let i = 0; i < arrOfCodes.length; i++){
		newstr+=String.fromCharCode(arrOfCodes[i] ^ Number(key.charCodeAt(k)));
		k++;
		if(k > key.length - 1){ k = 0;}
	}
	return newstr;
}






