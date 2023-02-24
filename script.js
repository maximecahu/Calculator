

// CONSTANTS AND VARIABLES--------------------------------------------------------------------------------------------------

const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");
const timesButton = document.getElementById("times-button");
const divideButton = document.getElementById("divide-button");
const equalsButton = document.getElementById("equals-button");
const oneButton = document.getElementById("one-button");
const twoButton = document.getElementById("two-button");
const threeButton = document.getElementById("three-button");
const fourButton = document.getElementById("four-button");
const fiveButton = document.getElementById("five-button");
const sixButton = document.getElementById("six-button");
const sevenButton = document.getElementById("seven-button");
const eightButton = document.getElementById("eight-button");
const nineButton = document.getElementById("nine-button");
const zeroButton = document.getElementById("zero-button");
const pointButton = document.getElementById("point-button")
const posnegButton = document.getElementById("posneg-button")
const clearButton = document.getElementById("clear-button")
const ansButton = document.getElementById("ans-button")

let ans = 0;
let finalAns = 0;
let lastInput = 0;
let scriptMemory = "";
let display = "";
let numberPressed = false
let positiveNum = true
let equalBtnPressed = false
let calculationOnGoing = false
let operationBtnPressed = false
//-------------------------------------------------------------------------------------------------------------------------

//EVENT LISTENERS----------------------------------------------------------------------------------------------------------

ansButton.addEventListener("click", function () {
    display = finalAns;
    numberPressed = true
    equalBtnPressed = false
    operationBtnPressed = false
    document.getElementById("input-field").value = display;
})

clearButton.addEventListener("click", function () {
    display = "";
    ans = 0;
    finalAns = 0;
    scriptMemory = "";
    numberPressed = false
    positiveNum = true
    equalBtnPressed = false
    calculationOnGoing = false
    operationBtnPressed = false
    document.getElementById("input-field").value = display;
})

posnegButton.addEventListener("click", function () {
    const displayInput = parseFloat(document.getElementById("input-field").value);
    if (equalBtnPressed == true || calculationOnGoing == true) {
        display = "";
        display += "-"
        document.getElementById("input-field").value = display;
    } else if (displayInput > 0) {
        if (numberPressed == false) {
            display += "-"
            document.getElementById("input-field").value = display;
        } else {
            display = "-" + display;
            document.getElementById("input-field").value = display;
        }
    } else if (displayInput < 0) {
        if (numberPressed == false) {
            display -= "-"
            document.getElementById("input-field").value = display;
        } else {
            display = display.slice(1);
            document.getElementById("input-field").value = display;
        }
    } else if (displayInput == 0) {

    } else if (display == "-") {
        display = ""
        document.getElementById("input-field").value = display;
    } else {
        display += "-"
        document.getElementById("input-field").value = display;
    }

    equalBtnPressed = false
})

oneButton.addEventListener("click", function () { number(1); })
twoButton.addEventListener("click", function () { number(2); })
threeButton.addEventListener("click", function () { number(3); })
fourButton.addEventListener("click", function () { number(4); })
fiveButton.addEventListener("click", function () { number(5); })
sixButton.addEventListener("click", function () { number(6); })
sevenButton.addEventListener("click", function () { number(7); })
eightButton.addEventListener("click", function () { number(8); })
nineButton.addEventListener("click", function () { number(9); })
zeroButton.addEventListener("click", function () { number(0); })
pointButton.addEventListener("click", function () { number("."); })
plusButton.addEventListener("click", function () { operation("+") })
minusButton.addEventListener("click", function () { operation("-") })
timesButton.addEventListener("click", function () { operation("*") })
divideButton.addEventListener("click", function () { operation("/") })
equalsButton.addEventListener("click", equal)
//----------------------------------------------------------------------------------------------------------------------


//FUNCTIONS-------------------------------------------------------------------------------------------------------------

function number(num) {
    if (equalBtnPressed == true) {
        scriptMemory = "";
        display = "";
        display += num;
        document.getElementById("input-field").value = display;
    } else {
        numberPressed = true;
        display += num;
        document.getElementById("input-field").value = display;
    }
    numberPressed = true
    equalBtnPressed = false
    operationBtnPressed = false
}

function operation(op) {
    if (operationBtnPressed == true) {

    } else if (operationBtnPressed == false) {
        if (calculationOnGoing == false) {
            equalBtnPressed = false
            numberPressed = false
            calculationOnGoing = true
            display = "";
            const inputPlus = parseFloat(document.getElementById("input-field").value);
            console.log("inputPlus: " + inputPlus)
            ans = inputPlus;
            console.log("ans: " + ans)
            scriptMemory = op;
            document.getElementById("input-field").value = ans;
        } else if (calculationOnGoing == true) {

            equalBtnPressed = false
            numberPressed = false
            display = "";
            const inputEquals = parseFloat(document.getElementById("input-field").value);
            if (scriptMemory == "+") {
                addition(ans, inputEquals)
            } else if (scriptMemory == "-") {
                subtraction(ans, inputEquals)
            } else if (scriptMemory == "*") {
                multiplication(ans, inputEquals)
            } else if (scriptMemory == "/") {
                division(ans, inputEquals)
            }
            console.log("ans: " + ans)
            scriptMemory = op;
            document.getElementById("input-field").value = ans;
        }
    }
    operationBtnPressed = true
}



function equal() {

    if (equalBtnPressed == false) {
        const inputEquals = parseFloat(document.getElementById("input-field").value);
        lastInput = inputEquals;
        if (scriptMemory == "+") {
            addition(ans, inputEquals)
        } else if (scriptMemory == "-") {
            subtraction(ans, inputEquals)
        } else if (scriptMemory == "*") {
            multiplication(ans, inputEquals)
        } else if (scriptMemory == "/") {
            division(ans, inputEquals)
        } else { ans = parseFloat(document.getElementById("input-field").value) }
        finalAns = ans;
        console.log("Last Input: " + lastInput)
        document.getElementById("input-field").value = ans;
        console.log("final ans: " + finalAns)
        equalBtnPressed = true
        numberPressed = false
        calculationOnGoing = false
        operationBtnPressed = false
    } else if (equalBtnPressed == true) {
        if (scriptMemory == "+") {
            addition(finalAns, lastInput)
        } else if (scriptMemory == "-") {
            subtraction(finalAns, lastInput)
        } else if (scriptMemory == "*") {
            multiplication(finalAns, lastInput)
        } else if (scriptMemory == "/") {
            division(finalAns, lastInput)
        }
        finalAns = ans;
        console.log("equalbtnpressed true")
        console.log("Last Input: " + lastInput)
        document.getElementById("input-field").value = ans;
        console.log("final ans: " + finalAns)
        equalBtnPressed = true
        numberPressed = false
        calculationOnGoing = false
        operationBtnPressed = false
    }
}




function addition(firstNum, secondNum) {
    let addans = firstNum + secondNum;
    ans = addans;
}


function subtraction(firstNum, secondNum) {
    let minusans = firstNum - secondNum;
    ans = minusans;
}


function multiplication(firstNum, secondNum) {
    let timesans = firstNum * secondNum;
    ans = timesans;
}


function division(firstNum, secondNum) {
    let divideans = firstNum / secondNum;
    ans = divideans;
}
//----------------------------------------------------------------------------------------------------------------------