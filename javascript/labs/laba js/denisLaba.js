
	/*Задание js4_1. В скрипте запрашивать у пользователя ввести в диалоговое окно ввода
JavaScript математическое выражение, затем это выражение должно вычисляться и
результат выдаваться в диалоговом окне. 
*/
  var x = prompt("Введите выражения", "выражение");
  var k = eval(x);
  alert(k);

/*Задание js 24. Дополните код согласно заданию: В переменную povtor присвоить результат
выполнения функции confirm, которая принимает фразу «Пройти заполнение еще раз?» 
*/
  function say() {
   document.write("Вы здесь?" + "<br/>");
  }
  do {
   say();
   povtor = confirm("Пройти заполнение еще раз?");
  } while (povtor);
  
/* Задание js 25. Создать функцию, которая вычитает два вводимых пользователем в
диалоговое окно числа и выводит сообщение с результатом (функция без параметров) 
*/
  function f()
  {
    var x = prompt("Введите первое число:", 0);
    var y = prompt("Введите второе число:", 0);
    alert(x - y);
  }
  f();

/* Задание js 26. Необходимо запросить у пользователя имя. Вызывать функцию для вызова
диалогового окна с сообщением «Привет, имя!» */
  function sayHi(name)
  {
    alert("hi "+ name );
  }
  var name = prompt("Ваше имя", "имя");
  sayHi(name);

 /*Задание js 27. Создать функцию, возвращающую наибольшее из трех чисел. Аргументами
функции являются сами числа */

  function sayHi(x,y,z)
  {
    if (x > y && x > z) { return x};
    if (y > x && y > z) {return y};
    return z;
  }

/* Задание js 28. Дополните код согласно заданию:
Создать 2 переменные глобальной и локальной области видимости (то есть внутри
функции func) с именами: global, local.
В переменную global занести текст “Привет”, в local — “Мир” 
*/
function func() {
  global var x = "Привет";
  var y = "мир";
}
func();


/*Задание js 29. Вычислить факториал числа с использованием рекурсии, беря за образец
пример вычисления факториала итерационным методом */


  function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
  }

  alert( factorial(6));


</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание 30
</div>
<script type="text/javascript">
	var countries = new Array(4);
	countries[0] = "Ukraine";
	countries[1] = "Russia";
	countries[2] = "England";
	countries[3] = "Germany";
	var population = new Array(4);
	population[0] = 100000;
	population[1] = 320000;
	population[2] = 104500;
	population[3] = 153000;
	document.write("<table style='font-size:25px;-webkit-border-radius:5px;-moz-border-radius:5px;" +
	    "border-radius:5px;background:#f00000'><tr>");
	for(var i = 0; i < countries.length; i++)
	{
	    document.write("<td style='padding-left:10px;padding-right:10px;'>" + countries[i] + ":" + population[i] + "</td>");
	}
	document.write("</tr></table>");
</script>


<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание 5_3
</div>
<!-- <script type="text/javascript">
	var elements = new Array(3);
	for (var i = 0; i < elements.length; i++)
	{
	    elements[i] = prompt("Введите значение элемента", "0");
	    document.write(elements[i] + "<br>");
	}
</script> -->

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание 31
</div>
<!-- <script type="text/javascript">
	function numberOfDay(array, prompt) {
	    if (array.length === 0)
	    {
	        return -1;
	    }

	    for(var i = 0; i < array.length; i++)
	    {
	        if (array[i] === enteredValue) {
	            return ++i;
	        }
	    }
	    return -1;
	}

	var daysOfWeek = ["Понедельник", "Вторник",
	                            "Среда", "Четверг", "Пятница",
	                            "Суббота", "Воскресение"];
	var enteredValue = prompt("Введите название дня недели: ");
	if (numberOfDay(daysOfWeek, enteredValue) !== -1)
	{
	    alert("Номер дня недели: " + numberOfDay(daysOfWeek, enteredValue));
	}
	else
	{
	    alert("Вы ввели некорректные данные");
	}
</script> -->


<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание 32
</div>
<script type="text/javascript">
	var numbers = [1, 2, 3, 4, 5];
	document.write(numbers.reverse() + "<br>");
</script>


<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание 33
</div>
<script type="text/javascript">
	var symbols = ['c', 5, 2, 'b', 3, 1, 4, 'a'];
	symbols.sort();
	document.write(symbols + "<br>");
</script>


<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание 34
</div>
<script type="text/javascript">
	var numbers = [1, 2, 3, 4, 5];
	document.write(numbers + "<br>");
	document.write(numbers.join("+"));
</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание 35
</div>
<script type="text/javascript">
	var matrix = [
	    [-5, -4, -3, -2, -1],
	    [-3, -2, -1, 5, 10],
	    [42, 1, 6, 3, 6],
	    [-4, 1, 5, 7, -5],
	    [-10, 6, 2, 7, 3]
	];

	for (var i = 0; i < 5; i++)
	{
	    for (var j = 0; j < 5; j++)
	    {
	        if (matrix[i][j] <= 7 && matrix[i][j] >= -5)
	        {
	            document.write(matrix[i][j] + ", ");
	        }
	    }
	}
</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание 6_1
</div>
<!-- <script type="text/javascript">	
	function Employee(name, department, mPhone, salary)
	{
	    this.name = name;
	    this.department = department;
	    this. mPhone = mPhone;
	    this.salary = salary;
	}

	var employeeExample = new Employee("Лёша", "dev", "+380505555555", "1$");

	alert(employeeExample.name);
	alert(employeeExample.department);
	alert(employeeExample.mPhone);
	alert(employeeExample.salary);

	var empEx = [];
	do {

	    empEx.push(new Employee(prompt("name: "), prompt("dep: "), prompt(  "ph: "), prompt("sal: ")));
	    var cont = prompt("add? ");
	} while(cont !== 0);
</script> -->

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js 6_2
</div>
<!-- <script type="text/javascript">
	function Employee(name, department, mPhone, salary)
	{
	    this.name = name;
	    this.department = department;
	    this. mPhone = mPhone;
	    this.salary = salary;
	}
	var employeeExample = new Employee("Лёша", "Dev", "+38050555555", "1$");
	Employee.prototype.address = "Янгеля 7";
	alert(employeeExample.name);
	alert(employeeExample.department);
	alert(employeeExample.mPhone);
	alert(employeeExample.salary);
	alert(employeeExample.address);
</script>	 -->

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js36
</div>
<script type="text/javascript">
	function TravelCompany(peoples, days, rate) {
	    this.amountOfPeoples = peoples;
	    this.amountOfDays = days;
	    this.countryRate = rate;
	    this.infoForTourist = function() { // функция расчета цены за тур
	        var price = this.countryRate * this.amountOfPeoples * this.amountOfDays;
	        document.write("Инфа: " + this.amountOfPeoples + " " + this.amountOfDays + " " + price);
	    }
	}

	var Example = new TravelCompany("2", "5", "200");
	Example.infoForTourist();
</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js37
</div>
<script type="text/javascript">
	var employee = Object();
	employee.name = "Alexei";
	employee.department = "develop";
	employee.phone = "050596999";
	employee.salary = "1$";

	function empDataShow() {
	    for (var i in employee)
	    {
	        document.write(i + ": " + employee[i] + "<br>");
	    }
	}

	empDataShow();
</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js38
</div>
<!-- <script type="text/javascript">
	function MenuItem(title, url) {
	    this.title = title;
	    this.url = url;
	    this.Show = function () {
	        document.write("<td><a href=' " + this.url + "'>" + this.title + "</a></td>");
	    }
	}

	var amountOfMenu = parseInt(prompt("Введите количество пунктов меню: "));
	var MI = new MenuItem();
	document.write("<table><tr>");
	for (var i = 0; i < amountOfMenu; i++)
	{
	    MI.title = prompt("Введите название " + (i + 1) + "пункта");
	    MI.url = prompt("Введите url " + ( i + 1) + "пункта");
	    MI.Show();
	}
	document.write("</tr></table>");
</script> -->

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js40
</div>
<script type="text/javascript">
	var now=new Date();
	var hours=now.getHours();
	var minutes = now.getMinutes();
	var seconds= now.getSeconds();
	if(minutes < 10){
		minutes = '0' + minutes
	}
	if(seconds < 10){
		seconds = '0' + seconds;
	}
	document.write("Текущее время: " + hours + ":" + minutes + ":" + seconds);
</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js 7_3.
</div>
<script type="text/javascript">
	var date = new Date();
	var day = date.getDay();
	var name;
	switch(day) {
	  case 1:  // if (x === 'value1')
	    name = "пн"
	    break
	  case 2:  // if (x === 'value2')
	    name = "вт"
	    break
	  case 3:  // if (x === 'value2')
	    name = "ср"
	    break
	case 4:  // if (x === 'value2')
		    name = "чт"
		    break
	case 5:  // if (x === 'value2')
		    name = "пт"
		    break
	case 6:  // if (x === 'value2')
		    name = "сб"
		    break
	case 7:  // if (x === 'value2')
			    name = "вс"
			    break


	  default:
	    
	    break
	}
	document.write(name);
</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js 41.
</div>
<script type="text/javascript">
	document.write("размеры окна браузера" + document.body.clientWidth + " " +  document.body.clientHeight);
</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js 42.  Js8_3.
</div>
<form>
	Имя: <input type="text" id="name"><br>
	Кол-во пончиков: <input type="text" id="donuts"><br>
	Минут: <input type="text" id="minutes"><br>
	Подитог: <input type="text" id="poditog"><br>
	Налог: <input type="text" id="tax"><br>
	Итог:<input type="text" id="itog"><br>
	<input type="submit" value="заказать" onclick="placeOrder();">
</form>
<script type="text/javascript">
	function placeOrder()
	{
		if(document.getElementById("donuts").value != "")
		{
			alert("sorry");
		}
	}

	document.getElementById("donuts").value = '0';
	document.getElementById("minutes").value = '0';
	document.getElementById("poditog").value = '0';
	document.getElementById("tax").value = '0';
	document.getElementById("itog").value = '0';
</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js 44.
</div>
<div onload="resizeimg()">
	<img src="1.jpg" id="44_1">
	<img src="1.jpg" id="44_2">
</div>
<script type="text/javascript">
	var allImg=document.getElementsByTagName('img'); 
	for (var i=0; i < allImg.length; i++){
		allImg[i].style.width = '100px'; // меняем свойство width
		allImg[i].style.height = '50px'; // меняем свойство height
		allImg[i].style.border = '2px solid black'; // меняем border
	}
</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js 45.
</div>

<img id="smileImg45" src="smile1.jpg" onclick="sayHello()"/>
<script type="text/javascript">
	function sayHello() {
		var userName=prompt("Как вас зовут?");
		alert("hi " + userName);
		document.getElementById("smileImg45").src = "smile2.jpg";
	}
</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js 46.
</div>
<div>
	<br> <a href="/" onmouseover="document.bgColor='green' ">Зеленый</a>
	<br> <a href="/" onmouseover="document.bgColor='seagreen'">seagreen</a>
	<br><a href="/" onmouseover="document.bgColor='purple' ">purple</a>
	<br><a href="/" onmouseover="document.bgColor='navy' ">navy</a>  
	<br><a href="/" onmouseover="document.bgColor='royalblue' ">royalblue</a> 
</div> 

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js 47.
</div>
<img src="smile1.jpg" onmouseover="document.getElementById('smileImg47').src = 'smile2.jpg'"  onmouseout="document.getElementById('smileImg47').src = 'smile1.jpg'" id="smileImg47">

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js51,2.
</div>
<form action="mailto:address@domen.domen" method="post"  name='form51'>
  <textarea name="textarea">Впишите свой текст</textarea><br />
  <input type="reset" id="btn" onclick="nameS()" value="cancel">
  <input type="submit" value="ok">
</form>
<script>
  function nameS()
  {
    window.document.form51.btn.value='Done';
  } ;
</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js53
</div>
<script>
  function check(){
    if(window.document.form53.answer.value=='8') {
      alert("yes");
    }
    else {
      alert("no");
    }
  }
</script>
<form action="" method="get" name="form53">
  Сколько бит в 1 байте?
  <input type="text" id="answer" size="3"><br>
  <input name="b1" type="button" onClick="check()" value="Проверить">
</form>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js54.
</div>
<div>
	<img src="1.jpg" id="seat0" alt="" title="seat0">
	<img src="1.jpg" id="seat1" alt="" title="seat1">
	<img src="1.jpg" id="seat2" alt="" title="seat2">
	<img src="1.jpg" id="seat3" alt="" title="seat3">
	<br>
	<input type="button" id="findseats" value="Определить свободные места">
</div>
<script>
  //инициализация мест
  function initSeats() {
    document.getElementById("seat0").alt= Math.random();
    document.getElementById("seat1").alt= Math.random();
    document.getElementById("seat2").alt= Math.random();
    document.getElementById("seat3").alt= Math.random();
  }
  // random!!!!!!!!!
  // функция отображения состояния мест: занято или свободно
  function showSeatStatus(num){
    if (document.getElementById("seat"+num).alt)
      {
        alert ("свободно")
      }
    else
      {
        alert ("занято")
      }
  }
  
  // Поиск свободных мест среди всех возможных
  function findSeats() {
    var i = 0;
    // Проверяем, свободно ли текущее место
    for(i ; i < 4; i++)
      if (document.getElementById("seat"+i).alt == "yes")
      {
        document.getElementById("seat"+i).style.border="5px #999 solid";
      }
  }
  
  window.onload = function() {
    //связываем события onclick изобр-й с запуском функции showSeatStatus()
    document.getElementById("findseats").onclick = function(){findSeats()};
    document.getElementById("seat0").onclick = function(){showSeatStatus(0)};
    document.getElementById("seat1").onclick = function(){showSeatStatus(1)};
    document.getElementById("seat2").onclick = function(){showSeatStatus(2)};
    document.getElementById("seat3").onclick = function(){showSeatStatus(3)};
    //запускаем функцию инициализации мест
    initSeats();
  }
</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js11_4.
</div>
<script>  
  function checkAll() {
    for(var i=1;i<=4;i++){
      if (document.getElementById("t"+i).value.length == 0) 
      {
        alert("Заполните поле" + i);
      }
    }
  }
</script>
<form name="f1">
  Ваше имя:<br>
  <input type="text" id="t1" onblur="validateNonEmpty(this)">
  <input type="text" id="t2" onblur="validateNonEmpty(this)">
  <input type="text" id="t3" onblur="validateNonEmpty(this)">
  <input type="text" id="t4" onblur="validateNonEmpty(this)">
  <input type="button" onclick="checkAll()" value="check "  > 
</form>


<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js 56.
</div>
<form name="f56">
  Какой ответ?
  <input type="checkbox" name="ch1">правильный<br>
  <input type="checkbox" name="ch2">правильный<br>
  <input type="checkbox" name="ch3">неправилый<br>
  <input type="button" onclick="check56()" value="check "  > 
</form>
<script>
   function check56()
   {
    if (document.f56.ch1.checked && document.f56.ch2.checked) 
    {
       alert("правильный");
    }
    else
    {
      alert("неправилый");
    }
   }
</script>

<div style=" text-align:  center; background-color: #24292e; width:  600px;  color: white; margin: 20px 40px; ">
Задание js 57.
</div>
<form name="f57">
  «Какой заряд у электрона?»
  <input type="radio" name="ch1" id="radio57">«положительный»<br>
  <input type="radio" name="ch1">«отрицательный»<br>
  <input type="button" onclick="check57()" value="check "  > 
</form>
<script>
   function check57()
   {
    if (document.getElementById("radio57").checked) 
    {
       alert("правильный");
    }
    else
    {
      alert("неправилый");
    }
   }
</script>


<div style=" text-align:  center; background-color: #24292e; width: 600px;  color: white; margin: 20px 40px; ">
Задание js 58.
</div>
<div>
  <input type="text" id="t58">
  <br>

  <select id="menu58" onchange="check58()">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</div>
<script>
  function check58()
  {
    document.getElementById('t58').value = document.getElementById('menu58').value;
  }
</script>

<div style=" text-align:  center; background-color: #24292e; width: 600px;  color: white; margin: 20px 40px; ">
Задание js 59.
</div>
<div>
  <select id="menu59">
    <option value="моль">моль</option>
    <option value="джоуль">джоуль</option>
  </select>
  <button onclick="check59()">Проверить</button>
</div>
<script>
  function check59()
  {
    if (document.getElementById('menu59').value == "джоуль") 
    {
      alert("молодец");
    }
    else
    {
      alert("нет");
    }
    
  }
</script>

<div style=" text-align:  center; background-color: #24292e; width: 600px;  color: white; margin: 20px 40px; ">
Задание js 60.
</div>
<form name="f60">
  <select name="s60">
    <option value="Ростов Дон">Ростов-Дон</option>
    <option value="Владимир">Владимир</option>
    <option value="Москва">Москва</option>
  </select>
  <input type="button" onClick="myFunc60()">
</form>
<script>
  function myFunc60(){
    document.f60.s60.options[0].value = "Не Ростов";
    document.f60.s60.options[0].text = "Не Ростов";;
  }
</script>

<div style=" text-align:  center; background-color: #24292e; width: 600px;  color: white; margin: 20px 40px; ">
Задание js 61.
</div>
<canvas id="canvas61" width="700" height="700">
</canvas>
<script>
  var canvas = document.getElementById('canvas61');
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(300,300,50,0,Math.PI*2,true); 
  ctx.moveTo(400,300)
  ctx.arc(300,300,100,0,Math.PI*2,true); // Внешняя окружность
  ctx.moveTo(450,300)
  ctx.arc(300,300,150,0,Math.PI*2,true);
  ctx.moveTo(500,300)
  ctx.arc(300,300,200,0,Math.PI*2,true);
  ctx.stroke();
</script>

<div style=" text-align:  center; background-color: #24292e; width: 600px;  color: white; margin: 20px 40px; ">
Задание js 62.
</div>
<canvas id="canvas62" width="700" height="700">
</canvas>
<script>
  var canvas = document.getElementById('canvas62');
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.fill();
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(90, 90, 20, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(150, 150, 35, 0, 2 * Math.PI);
  ctx.fillStyle = "#333333";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(211, 210, 50, 0, 2 * Math.PI);
  ctx.fillStyle = "#3ff333";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(260, 260, 70, 0, 2 * Math.PI);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();

   ctx.beginPath();
  ctx.arc(340, 340, 90, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(420, 420, 120, 0, 2 * Math.PI);
  ctx.fillStyle = "#777";
  ctx.fill();
  ctx.closePath();