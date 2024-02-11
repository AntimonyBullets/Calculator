let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let equals = document.getElementById("equals");
let screenTxt = document.getElementById("screenTxt");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let ac = document.getElementById("ac");
let del = document.getElementById("del");
let str = "";
function oneFunc() {
    str = str.concat('1');
    screenTxt.innerHTML = str;
}
function twoFunc() {
    str = str.concat('2');
    screenTxt.innerHTML = str;
}
function threeFunc() {
    str = str.concat('3');
    screenTxt.innerHTML = str;
}
function fourFunc() {
    str = str.concat('4');
    screenTxt.innerHTML = str;
}
function fiveFunc() {
    str = str.concat('5');
    screenTxt.innerHTML = str;
}
function sixFunc() {
    str = str.concat('6');
    screenTxt.innerHTML = str;
}
function sevenFunc() {
    str = str.concat('7');
    screenTxt.innerHTML = str;
}
function eightFunc() {
    str = str.concat('8');
    screenTxt.innerHTML = str;
}
function nineFunc() {
    str = str.concat('9');
    screenTxt.innerHTML = str;
}
function zeroFunc() {
    str = str.concat('0');
    screenTxt.innerHTML = str;
}
function dotFunc() {
    if (str[str.length - 1] !== '+' && str[str.length - 1] !== '-' && str[str.length - 1] !== '*' && str[str.length - 1] !== '/' && str[str.length - 1] !== '.' && str !== "") {
        str = str.concat('.');
        screenTxt.innerHTML = str;
    }
}
function addFunc() {
    if (str[str.length - 1] !== '+' && str[str.length - 1] !== '-' && str[str.length - 1] !== '*' && str[str.length - 1] !== '/' && str !== "" && str[str.length - 1] !== '.') {
        str = str.concat('+');
        screenTxt.innerHTML = str;
    }
}
function subtractFunc() {
    if (str[str.length - 1] !== '+' && str[str.length - 1] !== '-' && str[str.length - 1] !== '*' && str[str.length - 1] !== '/' && str[str.length - 1] !== '.') {
        str = str.concat('-');
        screenTxt.innerHTML = str;
    }
}
function multiplyFunc() {
    if (str[str.length - 1] !== '+' && str[str.length - 1] !== '-' && str[str.length - 1] !== '*' && str[str.length - 1] !== '/' && str !== "" && str[str.length - 1] !== '.') {
        str = str.concat('*');
        screenTxt.innerHTML = str;
    }
}
function divideFunc() {
    if (str[str.length - 1] !== '+' && str[str.length - 1] !== '-' && str[str.length - 1] !== '*' && str[str.length - 1] !== '/' && str !== "" && str[str.length - 1] !== '.') {
        str = str.concat('/');
        screenTxt.innerHTML = str;
    }
}
function delFunc() {
    str = str.slice(0, -1);
    screenTxt.innerHTML = str;
}
function acFunc() {
    str = "";
    screenTxt.innerHTML = str;
}
// Main logic

function equalsFunc() {
    let originalstr;
    let opIndex, leftIndex, rightIndex;
    let LeftSlice, rightSlice;
    let plusSign = '+';
    let firstOperand, secondOperand;
    let result, resultString;
    let check = true;
    originalstr = str;
    check = true;
    while (check) {
        opIndex = str.indexOf('/');
        if (opIndex === -1) {
            opIndex = str.indexOf('*');
            if (opIndex === -1) {
                opIndex = str.indexOf('+');
                if (opIndex === -1) {
                    opIndex = str.indexOf('-', 1);
                }
            }
        }
        if (opIndex < 0 || opIndex === str.length - 1) {
            break;
        }
        for (let j = opIndex - 1; str[j] !== '+' && str[j] !== '*' && str[j] !== '/'; j--) {
            leftIndex = j;
            if (j === 0 || str[j] === '-') {
                break;
            }
        }
        for (let j = opIndex + 1; str[j] !== '-' && str[j] !== '+' && str[j] !== '*' && str[j] !== '/'; j++) {
            rightIndex = j + 1;
            if (j === str.length - 1) {
                break;
            }
        }
        LeftSlice = str.slice(leftIndex, opIndex);
        rightSlice = str.slice(opIndex + 1, rightIndex);
        firstOperand = parseFloat(LeftSlice);
        secondOperand = parseFloat(rightSlice);
        if (str[opIndex] === '/') {
            result = firstOperand / secondOperand;
        }
        else if (str[opIndex] === '*') {
            result = firstOperand * secondOperand;
        }
        else if (str[opIndex] === '+') {
            result = firstOperand + secondOperand;
        }
        else if (str[opIndex] === '-') {
            result = firstOperand - secondOperand;
        }
        resultString = result.toString();
        if (firstOperand < 0 && result > 0) {
            resultString = plusSign.concat(resultString);
        }
        str = str.slice(0, leftIndex) + resultString + str.slice(rightIndex);
        screenTxt.innerHTML = str;
    }
    if (str.indexOf('+') === -1 && str.indexOf('-', 1) === -1 && str.indexOf('*') === -1 && str.indexOf('/') === -1) {
        check = false;
    }
}
one.addEventListener('click', oneFunc)
two.addEventListener('click', twoFunc)
three.addEventListener('click', threeFunc)
four.addEventListener('click', fourFunc)
five.addEventListener('click', fiveFunc)
six.addEventListener('click', sixFunc)
seven.addEventListener('click', sevenFunc)
eight.addEventListener('click', eightFunc)
nine.addEventListener('click', nineFunc)
zero.addEventListener('click', zeroFunc)
dot.addEventListener('click', dotFunc)
add.addEventListener('click', addFunc)
subtract.addEventListener('click', subtractFunc)
multiply.addEventListener('click', multiplyFunc)
divide.addEventListener('click', divideFunc)
del.addEventListener('click', delFunc)
ac.addEventListener('click', acFunc)
equals.addEventListener('click', equalsFunc)

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case '1':
            oneFunc();
            break;
        case '2':
            twoFunc();
            break;
        case '3':
            threeFunc();
            break;
        case '4':
            fourFunc();
            break;
        case '5':
            fiveFunc();
            break;
        case '6':
            sixFunc();
            break;
        case '7':
            sevenFunc();
            break;
        case '8':
            eightFunc();
            break;
        case '9':
            nineFunc();
            break;
        case '0':
            zeroFunc();
            break;
        case '.':
            dotFunc();
            break;
        case '+':
            addFunc();
            break;
        case '-':
            subtractFunc();
            break;
        case '*':
            multiplyFunc();
            break;
        case '/':
            divideFunc();
            break;
        case 'Backspace':
            delFunc();
            break;
        case 'Escape':
            acFunc();
            break;
        case 'Enter':
            equalsFunc();
            break;
        default:
            break;
    }
})