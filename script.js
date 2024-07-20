// Card Informations Variables to Display 
const cardNumber = document.getElementById("cardNumber")
const cardHolder = document.getElementById("cardHolderName")
const cardExpDate = document.getElementById("cardExpDate")
const cardCvc = document.getElementById("cardCvc")

// Input Fields 
const inputName = document.getElementById("name")
const inputNumber = document.getElementById("number")
const inputExpMonth = document.getElementById("mm")
const inputExpYear = document.getElementById("yy")
const inputCvc = document.getElementById("cvc")

// Button and Element Variables to Display ty Message
const confirmButton = document.getElementById("confirm")
const formPart = document.getElementById("formPart")
const tyMessageContainer = document.getElementById("tyMessage")

// for effects etc
const numberc = document.getElementById("numberc")
const expc = document.getElementById("expc")
const cvcDiv = document.getElementById("cvcDiv")
const cholderName = document.getElementById("cholderName")

// No brainer input fields (just paste whatever user writes) + zero counter for cvc
inputName.addEventListener("input", () => {
    if(inputName.value === ""){
        cholderName.classList.add("blank")
    } else {
        cholderName.classList.remove("blank")
    }
    cardHolder.innerHTML = inputName.value.toUpperCase()
})

let cvcZeroCounter = 3
inputCvc.addEventListener("input", () => {
    if (inputCvc.value === "") {
        inputCvc.classList.add("wrongy");
        cvcDiv.classList.add("blaank")
    } else {
        inputCvc.classList.remove("wrongy");
        cvcDiv.classList.remove("blaank")
    }
    cvcZeroCounter = 3 - inputCvc.value.length
    cardCvc.innerHTML = inputCvc.value + zeroCreator(cvcZeroCounter)
})

// To display exp date in 00/00 format without spans
let expMonthVariable = "00"
let expYearVariable = "00"

let mmZeroCounter = 2
let yyZeroCounter = 2

inputExpMonth.addEventListener("input", () => {
    if (inputExpMonth.value === "") {
        inputExpMonth.classList.add("wrongy");
        expc.classList.add("wrongg")
    } else {
        inputExpMonth.classList.remove("wrongy");
        expc.classList.remove("wrongg")
    }
    mmZeroCounter = 2 - inputExpMonth.value.length
    expMonthVariable = inputExpMonth.value + zeroCreator(mmZeroCounter)
    cardExpDate.innerHTML = expMonthVariable + "/" + expYearVariable
})

inputExpYear.addEventListener("input", () => {
    if (inputExpYear.value === "") {
        inputExpYear.classList.add("wrongy");
        expc.classList.add("wrongg")
    } else {
        inputExpYear.classList.remove("wrongy");
        expc.classList.remove("wrongg")
    }
    yyZeroCounter = 2 - inputExpYear.value.length
    expYearVariable = inputExpYear.value + zeroCreator(yyZeroCounter)
    cardExpDate.innerHTML = expMonthVariable + "/" + expYearVariable
})

// Card Number Part :O

let zeroCounter = 16
let cardNumberCurrent = ""

inputNumber.addEventListener("input", () => {
    if (isNaN(inputNumber.value)) {
        inputNumber.classList.add("wrongy");
        numberc.classList.add("wrongyx")
    } else if(inputNumber.value === ""){
        numberc.classList.add("wrongyy")
    } else {
        inputNumber.classList.remove("wrongy");
        numberc.classList.remove("wrongyx")
        numberc.classList.remove("wrongyy")
    }
    zeroCounter = 16 - inputNumber.value.length
    cardNumberCurrent = inputNumber.value + zeroCreator(zeroCounter)
    cardNumber.innerHTML = spacinginator(cardNumberCurrent)
})

/* This function is for showing the remaining parts. 
For example if user types "1" this will look like (1**) or (100) instead of 1 
I wanted to do that way cause otherwise i think it looks bad (in visual way). 
There were 16 zeros on the screen and when you write a number suddenly all of them disappears.
Maybe that wasnt a big deal but I already wrote its code and dont wanna remove it now 
:p */
function zeroCreator(z){
    let result = ""
    for(let i = 0; i < z; i++){
        result += "0"
    }
    return result
}

function spacinginator(w){
    let splittedW = w.split("") // ["1", "2", "3", "4", ... , "0"]
    let resultingArray = []
    for(let i = 0; i < splittedW.length; i++){
        if(i % 4 !== 0 || i === 0){
            resultingArray.push(splittedW[i])
        } else { 
            resultingArray.push(" ")
            resultingArray.push(splittedW[i])
        }
    }
    return resultingArray.join("")
}

confirmButton.addEventListener("click", () => {
    formPart.classList.add("hide");
    tyMessageContainer.classList.add("show");   
})
