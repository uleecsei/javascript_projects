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
      result.style = "font-size:20px;color:green;border:solid green 2px;width:500px;margin: 0 auto";
      result.innerHTML = bookCipher(textField.value,keyElement.value);
      inputDeCipher.value = "Дешифровать";
      inputDeCipher.type = "button";
      inputDeCipher.style = "width:150px;height:25px;margin:0 auto;font-size:15px;";

      inputDeCipher.onclick = ()=> {
        if(!deCipherItemExists){
        let deCipherItem = document.createElement("p");
        deCipherItem.style = "font-size:20px;color:orange;border:solid orange 2px;width:300px;margin: 0 auto";
        deCipherItem.innerHTML = keyElement.value;
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

function bookCipher(textField,keyWord){
const N=12; //ogranichitel` iz zadania
let arr_symb = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~',' ',',','.',''];
let tmp=textField.split("\n");// razbiwaem na stroki


for (let i = 0; i < tmp.length; i++) {
  tmp[i]=tmp[i].split("");
  tmp[i] = tmp[i].filter((item)=>!arr_symb.includes(item));//udaliaem vse lishnee i spez simwoly
}
console.log(tmp);

tmp = tmp.filter((item)=>!arr_symb.includes(item));

for (let i = 0; i < tmp.length; i++) {
  tmp[i]=tmp[i].slice(0,N);
  console.log(tmp[i]);
  
  
}

let Key=keyWord.split('');
let res="Зашифровано : ";

for (let i = 0; i < Key.length; i++) {
    for (let k = 0; k < N; k++) {
     if(tmp[k].indexOf(Key[i])!=-1){
       res+=(k+1)+'/'+(tmp[k].indexOf(Key[i])+1)+" | ";
        break;
     }
      
    }
}
return res;
}



