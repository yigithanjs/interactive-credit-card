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

let isThereAnyProblem = true
let isName = false
let isNumber = false
let isMonth = false
let isYear = false
let isCvc = false

// No brainer input fields (just paste whatever user writes) + zero counter for cvc
inputName.addEventListener("input", () => {
    if(inputName.value === ""){
        cholderName.classList.add("blank")
        isName = false
    } else {
        cholderName.classList.remove("blank")
        isName = true
    }
    cardHolder.innerHTML = inputName.value.toUpperCase()
})

// CVC input validation
let cvcZeroCounter = 3;
inputCvc.addEventListener("input", () => {
    if (inputCvc.value === "") {
        inputCvc.classList.add("wrongy");
        cvcDiv.classList.add("blaank");
        cvcDiv.classList.remove("format")
        isCvc = false
    } else if (isNaN(inputCvc.value)) {
        inputCvc.classList.add("wrongy");
        cvcDiv.classList.add("format")
        cvcDiv.classList.remove("blaank");
        isCvc = false
    } else {
        inputCvc.classList.remove("wrongy");
        cvcDiv.classList.remove("blaank");
        cvcDiv.classList.remove("format")
        
        if(inputCvc.value.length === 3){
            isCvc = true
        } else {
            isCvc = false
        }
    }
    cvcZeroCounter = 3 - inputCvc.value.length;
    cardCvc.innerHTML = inputCvc.value + zeroCreator(cvcZeroCounter);

});

// Expiry Month input validation
let expMonthVariable = "00";
let expYearVariable = "00";

let mmZeroCounter = 2;
let yyZeroCounter = 2;

inputExpMonth.addEventListener("input", () => {
    if (inputExpMonth.value === "") {
        inputExpMonth.classList.add("wrongy");
        expc.classList.add("wrongg");
        expc.classList.remove("wrongg2");
        isMonth = false
    } else if (isNaN(inputExpMonth.value)) {
        expc.classList.add("wrongg2");
        expc.classList.remove("wrongg");
        inputExpMonth.classList.add("wrongy");
        isMonth = false
    } else {
        inputExpMonth.classList.remove("wrongy");
        expc.classList.remove("wrongg");
        expc.classList.remove("wrongg2");

        if(inputExpMonth.value.length === 2){
            isMonth = true
        } else {
            isMonth = false
        }
    }
    mmZeroCounter = 2 - inputExpMonth.value.length;
    expMonthVariable = inputExpMonth.value + zeroCreator(mmZeroCounter);
    cardExpDate.innerHTML = expMonthVariable + "/" + expYearVariable;
});

// Expiry Year input validation
inputExpYear.addEventListener("input", () => {
    if (inputExpYear.value === "") {
        inputExpYear.classList.add("wrongy");
        expc.classList.add("wrongg");
        expc.classList.remove("wrongg2")
        isYear = false 
    } else if (isNaN(inputExpYear.value)) {
        expc.classList.add("wrongg2");
        expc.classList.remove("wrongg");
        inputExpYear.classList.add("wrongy");
        isYear = false 
    } else {
        inputExpYear.classList.remove("wrongy");
        expc.classList.remove("wrongg");
        expc.classList.remove("wrongg2");
        isYear = true

        if(inputExpYear.value.length === 2){
            isYear = true
        } else {
            isYear = false
        }
    }
    yyZeroCounter = 2 - inputExpYear.value.length;
    expYearVariable = inputExpYear.value + zeroCreator(yyZeroCounter);
    cardExpDate.innerHTML = expMonthVariable + "/" + expYearVariable;
});

// Card Number Part :O

let zeroCounter = 16
let cardNumberCurrent = ""

inputNumber.addEventListener("input", () => {
    // Check if the input value is empty
    if (inputNumber.value === "") {
        numberc.classList.add("wrongyy");
        numberc.classList.remove("wrongyx");
        inputNumber.classList.add("wrongy");
        isNumber = false
    }
    // Check if the input value is not a number
    else if (isNaN(inputNumber.value)) {
        numberc.classList.remove("wrongyy");
        numberc.classList.add("wrongyx");
        inputNumber.classList.add("wrongy");
        isNumber = false
    }
    // If input value is valid
    else {
        numberc.classList.remove("wrongyy");
        numberc.classList.remove("wrongyx");
        inputNumber.classList.remove("wrongy");
        isNumber = true

        if(inputNumber.value.length === 16){
            isNumber = true
        } else {
            isNumber = false
        }
    }
    
    // Update card number display
    zeroCounter = 16 - inputNumber.value.length;
    cardNumberCurrent = inputNumber.value + zeroCreator(zeroCounter);
    cardNumber.innerHTML = spacinginator(cardNumberCurrent);
});

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
    if(isName, isCvc, isMonth, isYear, isNumber){
        formPart.classList.add("hide");
        tyMessageContainer.classList.add("show"); 
    } else {
        
    }
  
})
