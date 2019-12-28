//task1
const blocks = document.querySelectorAll(".block");

blocks[0].addEventListener('mouseenter', function () {
    this.style.backgroundColor = "red";
});

blocks[1].addEventListener('mouseout', function () {
    this.style.backgroundColor = "orange";
});

blocks[2].addEventListener('mouseover', function () {
    this.style.backgroundColor = "aqua";
});

blocks[3].addEventListener('mousedown', function () {
    this.style.backgroundColor = "purple";
});

blocks[4].addEventListener('mouseup', function () {
    this.style.backgroundColor = "lightblue";
});

blocks[5].addEventListener('click', function () {
    this.style.backgroundColor = "coral";
});

//task2

const keyboard = document.getElementsByClassName("keyboard")[0];
const display = document.getElementById("display");
const list = document.getElementById("list");
const calc = document.getElementsByClassName("calc")[0];

keyboard.addEventListener("click", function (event) {
    if (event.target.className == 'keys' && event.target.innerHTML != 'C' && event.target.innerHTML != 'S') {
        display.value += event.target.innerHTML;
    }
    if (event.target.innerHTML == 'C') {
        display.value = "";
    }
    if (event.target.innerHTML == 'S') {
        let li = document.createElement('li');
        li.innerText = display.value;
        list.appendChild(li);
        display.value = "";
    }
});

keyboard.addEventListener("focus", function (event) {
    Array.prototype.forEach.call(keyboard.children, element => {
        element.style = "";
    });
    if (event.target.className == 'keys') {
        document.activeElement.style = 'border:2px solid black; width: 56px; height: 56px';
        if (calc.children.length < 3) {
            let div = document.createElement("div");
            div.id = "text"
            calc.appendChild(div);
        }
        calc.children[2].innerHTML = "In focus: " + event.target.innerHTML; 
    }
}, true);