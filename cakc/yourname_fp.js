document.getElementById("mul").style.backgroundColor = "aqua";
document.getElementById("div").style.backgroundColor = "burlywood";
document.getElementById("sub").style.backgroundColor = "chartreuse";
document.getElementById("add").style.backgroundColor = "coral";
let nums = document.getElementsByClassName("btn-grey");
var elms = document.querySelectorAll("[id='nums']");

for (var i = 0; i < elms.length; i++) elms[i].style.color = "blue";
document.getElementById("clear").style.backgroundColor = "black";
document.getElementById("clear").style.color = "white";

var elms = document.querySelectorAll("[id='m-btns']");

for (var i = 0; i < elms.length; i++) {
    elms[i].style.color = "white";
    elms[i].style.background = "gray";
}

let memValue = null;
let soln = null;
let leftVal = null;
let operation = false;
const display = (val) => {
    leftVal = leftVal + val;
    document.getElementById("mytext").value = leftVal;
};

const doMath = () => {
    if (leftVal == null) {
        document.getElementById("mytext").value = "Please enter a value"
    } else {
        soln = eval(leftVal)
        document.getElementById("mytext").value = soln;
    }

};

const clearScreen = () => {
    document.getElementById("mytext").value = null;
    leftVal = null;
};

const memStore = () => {
    memValue = soln;
}
const memRecall = () => {
    document.getElementById("mytext").value = memValue;
}

const memClear = () => {
    memValue = null;
}

document.getElementById('mytext').style.textAlign = 'right';


const btns = document.getElementById("overMouse");

let prevColor=null;
btns.addEventListener("mouseover", function (event) {
    prevColor= event.target.style.backgroundColor;
    event.target.style.backgroundColor = "yellow";

}, true)

btns.addEventListener("mouseout", function (event) {
        
    event.target.style.backgroundColor = prevColor;
}, false)
