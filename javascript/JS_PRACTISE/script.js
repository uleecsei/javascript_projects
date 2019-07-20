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
console.log('a1b2c3'.replace(/(\d)/g,"$1$1"));

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


//freecodecamp
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let subArr = [];
  let sizeOfArr = Math.floor(arr.length/size);
  
  for(let i = 0;i<sizeOfArr;i++){  	
  	for(let j = 0;j<size;j++){
  		subArr.push(arr.shift());
  	}
  	newArr.push(subArr);
  	subArr = [];
  }
  if(arr.length%size!==0){
  	sizeOfArr = arr.length%size;
  	for(let i = 0;i<sizeOfArr;i++){
  		alert(i);
  	subArr.push(arr.shift());
  }
  	newArr.push(subArr);
  }
  
  
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
