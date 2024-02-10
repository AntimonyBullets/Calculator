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
one.addEventListener('click', (event) => {
    str = str.concat('1');
    screenTxt.innerHTML = str;
})
two.addEventListener('click', (event) => {
    str = str.concat('2');
    screenTxt.innerHTML = str;
})
three.addEventListener('click', (event) => {
    str = str.concat('3');
    screenTxt.innerHTML = str;
})
four.addEventListener('click', (event) => {
    str = str.concat('4');
    screenTxt.innerHTML = str;
})
five.addEventListener('click', (event) => {
    str = str.concat('5');
    screenTxt.innerHTML = str;
})
six.addEventListener('click', (event) => {
    str = str.concat('6');
    screenTxt.innerHTML = str;
})
seven.addEventListener('click', (event) => {
    str = str.concat('7');
    screenTxt.innerHTML = str;
})
eight.addEventListener('click', (event) => {
    str = str.concat('8');
    screenTxt.innerHTML = str;
})
nine.addEventListener('click', (event) => {
    str = str.concat('9');
    screenTxt.innerHTML = str;
})
zero.addEventListener('click', (event) => {
    str = str.concat('0');
    screenTxt.innerHTML = str;
})
dot.addEventListener('click', (event) => {
    if (str[str.length - 1] !== '+' && str[str.length - 1] !== '-' && str[str.length - 1] !== '*' && str[str.length - 1] !== '/' && str[str.length - 1] !== '.' && str !== "") {
        str = str.concat('.');
        screenTxt.innerHTML = str;
    }
})

add.addEventListener('click', (event) => {
    if (str[str.length - 1] !== '+' && str[str.length - 1] !== '-' && str[str.length - 1] !== '*' && str[str.length - 1] !== '/' && str !== "" && str[str.length - 1] !== '.') {
        str = str.concat('+');
        screenTxt.innerHTML = str;
    }
})
subtract.addEventListener('click', (event) => {
    if (str[str.length - 1] !== '+' && str[str.length - 1] !== '-' && str[str.length - 1] !== '*' && str[str.length - 1] !== '/' && str[str.length - 1] !== '.') {
        str = str.concat('-');
        screenTxt.innerHTML = str;
    }
})
multiply.addEventListener('click', (event) => {
    if (str[str.length - 1] !== '+' && str[str.length - 1] !== '-' && str[str.length - 1] !== '*' && str[str.length - 1] !== '/' && str !== "" && str[str.length - 1] !== '.') {
        str = str.concat('*');
        screenTxt.innerHTML = str;

    }
})
divide.addEventListener('click', (event) => {
    if (str[str.length - 1] !== '+' && str[str.length - 1] !== '-' && str[str.length - 1] !== '*' && str[str.length - 1] !== '/' && str !== "" && str[str.length - 1] !== '.') {
        str = str.concat('/');
        screenTxt.innerHTML = str;
    }
})
del.addEventListener('click', (event) => {
    str = str.slice(0, -1);
    screenTxt.innerHTML = str;
})
ac.addEventListener('click', () => {
    str = "";
    screenTxt.innerHTML = str;
})
// Main logic
let originalstr;
let opIndex, leftIndex, rightIndex;
let LeftSlice, rightSlice, replaceSlice;
let plusSign = '+';
let firstOperand, secondOperand;
let result, resultString;
let check = true;
equals.addEventListener('click', () => {
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
        if (opIndex < 0) {
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
        screenTxt.innerHTML = originalstr + ' = ' + str;
    }
    if (str.indexOf('+') === -1 && str.indexOf('-', 1) === -1 && str.indexOf('*') === -1 && str.indexOf('/') === -1) {
        check = false;
    }
})