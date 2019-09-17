// //Задачи на нововведения в ES6 для новичков

// //1

// let arr1 = ["firs_elem",1,2,3,4,5];

// let [elem1,elem2,elem3,...arr] = arr1; 
// console.log(elem1,elem2,elem3);
// console.log(...arr);
// //2
// let arr2 = ["firs_elem","second_elem","third_elem","fourth_elem"];

// arr2.reverse();
// let [elem1_1, elem2_1] = arr2;
// console.log(elem1_1,elem2_1);

// //3
// let arr3 = arr2.reverse();
// let [,elem2_2] = arr3;
// console.log(elem2_2);

// //4 
// let arr4 = arr3;
// arr4.pop();
// arr4.pop();
// let [,elem2_3 = 'bbb',elem3_3 = 'eee'] = arr4;
// console.log(elem2_3,elem3_3);

// //5
// let obj = {
// 	name: 'Петр',
// 	'surname': 'Петров',
// 	'age': '20 лет'
// }
// let {name:name,surname:surname,age:age} = obj;
// console.log(name,surname,age);

// //6
// obj.surname = undefined;
// let {name:name1 = 'Аноном',surname:surname1='Анонимович',age:age1 = "? лет"} = obj;
// console.log(name1,surname1,age1);

// //7
// let arr5 = arr4;
// for(let i of arr5) 
// 	console.log(i);

// //8
// arr5.reverse();
// for(let i of arr5)
// 	console.log(i);

// //9
// let numArray = [2,5,6];
// let sum = 0;
// for(let curr of numArray){
// 	sum+=curr;
// }
// console.log(sum);

// //10
// let string = "Glovo";
// var oSum = 0;
// for(let i of string){
// 	if(i =="o"||i=="O"){
// 		oSum++;
// 	}
// }
// console.log(oSum);

// //11
// function func(a = 'Аноним') {
// 	alert('Привет, '+ a );
// }
// let name23 = 'Юзернейм';
// func();

// //12
// let options = {
// 	id: 'elem',
// 	color: 'blue',
// 	border: '1px solid red',
// 	font: '15px Arial'
// };

// function func1() {
// 	console.log(this);
// }
// func1();

// //13
// var parags = document.querySelectorAll('p');
// parags.forEach(elem => elem.addEventListener('click',
// 	() => window.setInterval(
// 	() => elem.innerHTML=Number(elem.innerHTML) +1, 1000)
// ));

// Задачи на регулярные выражения JavaScript. Часть 1

//1
console.log('ahb acb aeb aeeb adcb axeb'.replace(/a.b/g,"!"));

//2
console.log('aba aca aea abba adca abea'.replace(/a..a/g,"!"));

//3
console.log('aba aca aea abba adca abea'.replace(/ab.a/g,"!"));

//4
console.log('aa aba abba abbba abca abea'.replace(/ab+a/g,"!"));

//5
console.log('aa aba abba abbba abca abea'.replace(/ab*a/g,"!"));

//6
console.log('aa aba abba abbba abca abea'.replace(/ab?a/g,"!"));

//7
console.log('aa aba abba abbba abca abea'.replace(/ab*a/g,"!"));

//8
console.log('ab abab abab abababab abea'.replace(/(ab)+/g,"!"));

//12
console.log('23 2+3 2++3 2+++3 445 677'.replace(/2\+*3/g,"!"));

//13
console.log('*+ *q+ *qq+ *qqq+ *qqq qqq+'.replace(/\*q+\+/g,"!"));

//14
console.log('aba accca azzza wwwwa'.replace(/^a.+?a$/,"!"));


// Задачи на регулярные выражения JavaScript. Часть 1

//1
console.log('aa aba abba abbba abbbba abbbbba'.replace(/ab{2,4}a/g,"!"));

//2
console.log('aa aba abba abbba abbbba abbbbba'.replace(/ab{0,3}a/g,"!"));

//3
console.log('aa aba abba abbba abbbba abbbbba'.replace(/ab{4,}a/g,"!"));

//4
console.log('a1a a2a a3a a4a a5a aba aca'.replace(/a\da/g,"!"));

//5
console.log('a1a a22a a333a a4444a a55555a aba aca'.replace(/a\d+a/g,"!"));

//6
console.log('aa a1a a22a a333a a4444a a55555a aba aca'.replace(/a\d*a/g,"!"));

//7
console.log('avb a1b a2b a3b a4b a5b abb acb'.replace(/a\Db/g,"!"));

//8
console.log('ave a#b a2b a$b a4b a5b a-b acb'.replace(/a\Wb/g,"!"));

//9
console.log('ave a#b a2b a$b a4b a5b a-b acb'.replace(/\s/g,"!"));

//10
console.log('aba aea aca aza axa'.replace(/a[bex]a/g,"!"));

//11
console.log('aba aea aca aza axa a.a a+a a*a'.replace(/a[b\.\+\*]a/g,"!"));

//12
console.log('aba aea aca aza axa a.a a+a a*a'.replace(/a[b\.\+\*]a/g,"!"));

//13
console.log('aba aea aca aza axa a.a a+a a*a'.replace(/a[3-7]a/g,"!"));

//Задачи на регулярные выражения JavaScript. Часть 3

//1
console.log('aaa@bbb eee7@kkk'.replace(/(\w+)\@(\w+)/g,"$2@$1"));

//2
console.log('a1b2c3YESBOSs'.replace(/(\d)/g,"$1$1"));

//3
let email = 'my_email@gmail.com';
let regEmail =/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
console.log(regEmail.test(email));

//4
let checkForEmails =/^([a-zA-z])+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/g;
console.log("wrjoiqwrrj wiqrjowqi ullees@gmail.com wwe".match(checkForEmails));

let time = /[0-1]\d|[0-4]\:[0-5][0-9]/
let year = /(19\d\d|20\d\d|2100)/

"podvirra prislivva zalupa".replace()



function smallestCommons(arr) {
  let SCM = 1;
  let checkDivinity = 0;
  let isntFound = true;
  let length = 0;
  if(arr[0]<arr[arr.length-1]){
    do{
      for(let i = arr[0];i <= arr[arr.length-1];i++){
        if(SCM%i == 0 ){
          checkDivinity++;
        }
        length++;
      }
      if(checkDivinity === length){
        isntFound = false;
        return SCM;
      }
      length = 0;
      checkDivinity = 0;
      SCM++;
    }while(isntFound);
  }
  else{
       do{
      for(let i = arr[0];i >= arr[arr.length-1];i--){
        if(SCM%i == 0){
          checkDivinity++;
        }
        length++;
      }
      if(checkDivinity == length){
        isntFound = false;
        return SCM;
      }
      length = 0;
      checkDivinity = 0;
      SCM++;
    }while(isntFound);
  } 
}

console.log(smallestCommons([23,18]));



function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  return {name : arr[0]["name"],orbitalPeriod : Math.ceil(2 * Math.PI * Math.sqrt(earthRadius**3/GM))};
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

function palindrome(str) {
  let arr = str.split("");
  arr = arr.filter((el)=>{if(/[A-Za-z]/.test(el)){
    return el;
    }
  });
  let firstCheck = arr.join("");
  let secondCheck = arr.reverse().join("");
  if(firstCheck.toLowerCase() === secondCheck.toLowerCase()) return true;
  console.log(secondCheck);
  // Good luck!
  return false;
}
palindrome("_eye");
console.clear();



function rot13(str) { // LBH QVQ VG!
  let arr = str.split('');
  arr = arr.map((el)=>{
    if(/[A-Z]/.test(el)){
      el = String.fromCharCode((el.charCodeAt(0))>13?el.charCodeAt(0)-13:90+el.charCodeAt(0)-13);
      console.log(el);
      return el;
    }
    else{
      return el;
    }
  });
  return arr.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));



function checkCashRegister(price, cash, cid) {
  let change;
  let returnValue = {
    status: "",
    change: [],
  };
  let error = {status: "INSUFFICIENT_FUNDS", change: []};
  change = cash - price;
  let sum = 0;
  for(let i of cid)
    sum+=i[1];
  if(sum<change){
    return error;
  }
  if(sum===change){
    returnValue.status="CLOSED";
  }
  do{
  switch(true){
    case Math.floor(change/100)>0:
    if(Math.floor(cid[cid.length-1][1]/100)>=Math.floor(change/100)){
      returnValue.change.unshift(["ONE HUNDRED",Math.floor(change/100)*100]);
      change-=((Math.floor(change/100)*100)).toFixed(2);
    }
    else{
      returnValue.change.unshift(["ONE HUNDRED",cid[8][1]]);
      change-=cid[8][1].toFixed(2);
    }break;
    case Math.floor(change/20)>0:
    if(Math.floor(cid[7][1]/20)>=Math.floor(change/20)){
      returnValue.change.unshift(["TWENTY",Math.floor(change/20)*20]);
      change -=(Math.floor(change/20)*20).toFixed(2);
    }   
    else{
      returnValue.change.unshift(["TWENTY",cid[7][1]]);
      change-=cid[7][1].toFixed(2);
    }break;
    case Math.floor(change/10)>0:
    if(Math.floor(cid[6][1]/10)>=Math.floor(change/10)){
      returnValue.change.unshift(["TEN",Math.floor(change/10)*10]);
      change-=(Math.floor(change/10)*10).toFixed(2);
    } 
    else{
      returnValue.change.unshift(["TEN",cid[6][1]]);
      change-=cid[6][1].toFixed(2);
    }break;
    case Math.floor(change/5)>0:
    if(Math.floor(cid[5][1]/5)>=Math.floor(change/5)){
      returnValue.change.unshift(["FIVE",Math.floor(change/5)*5]);
      change-=(Math.floor(change/5)*5).toFixed(2);
    }   
    else{
      returnValue.change.unshift(["FIVE",cid[5][1]]);
      change-=cid[5][1].toFixed(2);
    }break;
    case change >= 1:
    if(cid[4][1]>=Math.floor(change)){
      returnValue.change.unshift(["ONE",Math.floor(change)]);
      change-=Math.floor(change).toFixed(2);
    }
    else{
      returnValue.change.unshift(["ONE",cid[4][1]]);
      change-=cid[4][1].toFixed(2);
    }break;
    case change>=0.25:
    if(Math.floor(cid[3][1]/0.25)>=Math.floor(change/0.25)){
      returnValue.change.unshift(["QUARTER",Math.floor(change/0.25)*0.25]);
      change-=(Math.floor(change/0.25)*0.25).toFixed(2);
    }  
    else{
      returnValue.change.unshift(["QUARTER",cid[3][1]]);
      change-=cid[3][1].toFixed(2);
    }break;
    case change>=0.1:
      if(Math.floor(cid[2][1]/0.1)>=Math.floor(change/0.1)){
      returnValue.change.unshift(["DIME",Math.floor(change/0.1)*0.1]);
      change-=(Math.floor(change/0.1)*0.1).toFixed(2);
    }  
    else{
      returnValue.change.unshift(["DIME",cid[2][1]]);
      change-=cid[2][1].toFixed(2);
    }break;
    case change>=0.05:
      if(Math.floor(cid[1][1]/0.05)>=Math.floor(change/0.05)){
      returnValue.change.unshift(["NICKEL",Math.floor(change/0.05)*0.05]);
      change-=(Math.floor(change/0.05)*0.05).toFixed(2);
    } 
    else{
      returnValue.change.unshift(["NICKEL",cid[1][1]]);
      change-=cid[1][1].toFixed(2);
    }break;
    case change>=0.01:
      if(Math.floor(cid[0][1]/0.01)>=Math.floor(change/0.01)){
      returnValue.change.unshift(["PENNY",Math.floor(change/0.01)*0.01]);
      change-=(Math.floor(change/0.01)*0.01).toFixed(2);
    }
    else{
      returnValue.change.unshift(["PENNY",cid[0][1]]);
      change-=cid[0][1].toFixed(2);
    }break;
  }}while(change>0);

  if(!returnValue.status){
    returnValue.status = "OPEN";
  }
  
  // Here is your change, ma'am.
  return returnValue;
  
}

// Example cash-in-drawer array:
// [["PENNY", 1.01]0,
// ["NICKEL", 2.05]1,
// ["DIME", 3.1]2,
// ["QUARTER", 4.25]3,
// ["ONE", 90]4,
// ["FIVE", 55]5,
// ["TEN", 20]6,
// ["TWENTY", 60]7,
// ["ONE HUNDRED", 100]]8

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


let people = null;
let nation = people || [1] && +"Ukrainian";
console.log(nation);
console.clear();


function isIsogram(str){
  let newArr = [];
  for(let i of str){
  if(newArr.includes(i)){
    return false;
  }
  newArr.push(i);  
}
  return true;
  //...
}
//console.log(isIsogram("qwer"));

function digital_root(n) {
  return (n - 1) % 9 + 1;
}
console.log(455 % 9);
function findOdd(A) {
  return A.sort((a,b)=>a-b).filter((item)=>{
  console.log(A.lastIndexOf(item)-A.indexOf(item)%2==0);
  return A.lastIndexOf(item)-A.indexOf(item)%2==0});
  
  //happy coding!
}
console.log(5^3);

let mem = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(mem);
console.log(mem);
function multiplyNumeric(menu){
  for(let i in menu){
    if(typeof menu[i] == typeof 1){
      menu[i] = menu[i]*2;
      console.log(menu[i]);
    }
    
  }
}

// class MyString{
//   reverse(str){
//     return str.split('').reverse().join('');
//   }
//   ucFirst(str){
//     return str[0].toUpperCase() + str.slice(1);
//   }
//   ucWords(str){
//     return str.split(/\s+/).map(element => element[0].toUpperCase() + element.slice(1)).join(' ');
//   }
// }
// var str = new MyString();
// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('ewfwefwejfwekfj')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

class Validator {
  isEmail(str){
    return /[a-z_]+\@[a-z]{2,6}\.[a-z]{2,3}/.test(str);
  }
  isDate(str){
    return /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/.test(str);
  }
  isDomain(str){
    return /\w+\.\w+/.test(str);
  }
  isPhone(str){
    return /\+380 \([0-9]{2}\) [0-9]{3}\-[0-9]{2}\-[0-9]{2}/.test(str);
  }
}

var validator = new Validator();

console.log(validator.isEmail('uleecsei@gmail.com'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+380 (29) 817-68-92')); //тут можете формат своей страны

class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}
class Student extends User{
  constructor(name,surname,year){
    super(name,surname);
    this.year = year;
  }
  getCourse(){
    if(this.year != undefined 
      && typeof this.year ==='number' 
      && 2019 - this.year < 5 && 2019 - this.year > 0){
      return 2019 - this.year;
    }
    else{
      console.error("Wtf?");
      return "error";
    }
  }
}
var student = new Student('Иван', 'Иванов', 2018);

console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2016
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2019

function isPrime(num) {
  for (var i = 2; i < num; i++) {
      if(num%i==0)
          return false;
  }
  return true;
}

function reversiblePrime(n){
let reversible = [2, 3, 5, 7];
let rev;
for(let i = 11;  reversible.length < 2000; i+= 2){
if (i%3 != 0 && i%5 != 0 && i%7 != 0){

if(isPrime(i) == true){
  rev = parseFloat(
    i
      .toString()
      .split('')
      .reverse()
      .join('')
  ); 
  if(isPrime(rev)===true){
reversible.push(i);
}
}
}
}

reversible.sort(function(a,b){ 
return a - b;
})
console.log(reversible);
return reversible[n];

}
console.clear();

// class Elem{
//   constructor(selector){
//     this.selector = document.getElementsByTagName('p');
//   }
//   html(value){
//     this.selector[0].innerHTML = value;
//   }
//   append(value){
//     this.selector.appendChild(value);
//   }
//   prepend(value){
//     this.selector.prependChild(value);
//   }
// }

// var elem = new Elem('p');

// console.log(elem.selector);
// elem.html('!'); //запишет в текст элемента '!'
// // elem.append('!'); //запишет в начало элемента '!'
// // elem.prepend('!'); //запишет в конец элемента '!'
// // elem.attr('class', 'www'); //запишет в атрибут class значение www

// // //Должны работать цепочки методов:
// // elem.html('hello').append('!').prepend('!');
// // elem.attr('class', 'www').attr('title', 'hello');
console.log( "\u{1F60D}" +  "\u{1F60D}" + "\u{1F60D}" +  "\u{1F60D}");





// const Calculator = function() {

//   this.evaluate = string => {
 
//     let arr = string.split(' ');
//     let i = 0;
//    do{
//       if(arr[i] == "/"){
//         arr.splice(i,1,arr[i - 1]/arr[i + 1]);
//         arr.splice(i - 1,1);
//         arr.splice(i,1);
//       }
//       if(arr[i] == "*"){
//         arr.splice(i,1,arr[i - 1]/arr[i + 1]);
//         arr.splice(i - 1,1);
//         arr.splice(i,1);
//       }
//       i++;
//       if(i == arr.length)i = 0;
//     }while(arr.includes("/")||arr.includes("*"));
//     i = 0;
//     do{
//       if(arr[i] == "+"){
//         arr.splice(i,1,+arr[i - 1]+ +arr[i + 1]);
//         arr.splice(i - 1,1);
//         arr.splice(i,1);
//       }
//       if(arr[i] == "-"){
//         arr.splice(i,1,arr[i - 1] - arr[i + 1]);
//         arr.splice(i - 1,1);
//         arr.splice(i,1);
//       }
//       i++;
//       if(i == arr.length)i = 0;
//       }while(arr.includes("+")||arr.includes("-"));
//       console.log(arr);
//       return arr;
//     } 
    
    
//     // do code here
//   }


console.clear();
function f(){
obj = {
  a: "kek",
  b: "meme",
  c: "??"
}
obj.meme = "kek";
obj.sobaka = "lel";
return obj;
}
console.log("" + f());
const Calculator = function() {

  this.evaluate = string => {
   
    let arr = string.split(' ');
    let i =  0;
   do{
     if(/[\/\*]/g.test(arr.join(' '))){
      if(arr[i] == "/"){
        arr.splice(i - 1,1,arr[i - 1]/arr[i + 1]);
        arr.splice(i,2);
        i=0;
      }
      if(arr[i] == "*"){
        arr.splice(i - 1,1,arr[i - 1]*arr[i + 1]);
        arr.splice(i,2);
        i=0;
      }
      }
      else{
      if(arr[i] == "+"){
        arr.splice(i - 1,1,+arr[i - 1]+ +arr[i + 1]);
        arr.splice(i,2);
        i=0;
      }
      if(arr[i] == "-"){
        arr.splice(i - 1,1,arr[i - 1]-arr[i + 1]);
        arr.splice(i,2);
        i=0;
      }
    }
      i++;
      if(i == arr.length)i = 0;
      }while(/(\*|\/|\+|-(?=\s))/g.test(arr.join(' ')));
      console.log(arr);
      return arr;
    } 
    
    
    // do code here
  }

var calculate = new Calculator();
calculate.evaluate("2 + 3 * 4 / 3 - 6 / 3 * 3 + 8");
