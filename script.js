//initialize x and y variables
let isComputed = false;
let x = 0;
let y = 0;
let isY = false;

//checks if there has been an operation
let operated = false;
// initialize primary display as a variable that begins as blank

let displayValue = "0";
display.innerText = displayValue;

// query selector for the number and operator buttons.

const numberButton = document.querySelectorAll('.numberButton');
const operatorButton = document.querySelectorAll('.operatorButton');
const calcButton = document.querySelectorAll('.button');

// operator variable to tell calculator which operator is performing;

let operator;

// check if number is a decimal

let isDecimalX = false;
let isDecimalY = false;

//variables for scientific notation conversion
let displayInteger = 0;
let integerNotation = 0;
let displayString = "";

/* FUNCTIONS
addition, subtraction, multiplication and division functions */

function add(x, y) {
    return (x + y);
}

function subtract(x, y) {
    return (x - y);
}

function multiply(x, y) {
    return (x * y);
}

function divide(x, y) {
    return (x / y);
}

// button styling event listener

calcButton.forEach((div) => {
    div.addEventListener('mousedown', () => {
        div.classList.add("clicked");
    })
    div.addEventListener('mouseup', () => {
        div.classList.remove("clicked");
    })
})

// event listener that populates displayValue with user inputted numbers

plusMinus.addEventListener('click', () => {
    
    //if it's x, swap sign of x variable
    if(y === 0) {
        x = (x-(x*2));
        displayValue = x;
        display.innerText = displayValue;
    }

    //if it's y, swap sign of y variable
    if(y != 0 && previousDisplay.textContent != "") {
        y = (y-(y*2));
        displayValue = y;
        display.innerText = displayValue;
    }

});

numberButton.forEach((div) => {
    div.addEventListener('click', () => {

        //if equals button was pressed last, clear everything.
        if(isComputed === true) {
            //reset values after a press of the equals button
            x = 0;
            isY = false;
            y = 0;
            isDecimalX = false;
            isDecimalY = false;
            displayValue = "";
            operated = false;
            //reset previous display
            previousDisplay.innerText = "";
            isComputed = false;
        }

        // check for a leading 0 and get rid of it
        if(displayValue === "0") {
            displayValue = "";
            display.innerText = displayValue;
        }

            //if operated is false, set x;
            if(operated === false) {

                // limit user input to 12 digits
                if(displayValue.length < 12) {

                    displayValue += event.target.innerText;
                    display.innerText = displayValue;
                    x = parseFloat(displayValue);
                }

            //if operated is true, set y
            } else if(operated === true) {

                // limit user input to 12 digits
                if(displayValue.length < 12) {

                    displayValue += event.target.innerText;
                    display.innerText = displayValue;
                    y = parseFloat(displayValue);
                }
            }
    });
});

// listen for a decimal point and limit its usage if number isDecimal

decimalButton.addEventListener('click', () => {

        //if isY is false and there and no decimal, add a decimal to x value and confirm isDecimal

        if(isY === false) {
            if(isDecimalX === false) {

                // limit user input to 12 digits
                if(displayValue.length < 12) {

                    // put a 0 in if it's missing
                    if(displayValue === "") {
                        displayValue = "0";
                        display.innerText = displayValue;
                    }

                    displayValue += event.target.innerText;
                    display.innerText = displayValue;
                    x = parseFloat(displayValue);
                    isDecimalX = true;
                }
            } else {

                // does nothing and returns if there is already a decimal
                return;
            }
        // if operated is true, work on y value
        } else if(isY === true) {

        //if there is an operator and no decimal add decimal to y variable and confirm isDecimal

            if(isDecimalY === false) {

                // limit user input to 12 digits
                if(displayValue.length < 12) {

                    //put a 0 in if it's missing
                    if(displayValue === "") {
                        displayValue = "0";
                        display.innerText = displayValue;
                    }

                    displayValue += event.target.innerText;
                    display.innerText = displayValue;
                    y = parseFloat(displayValue);
                    isDecimalY = true;
                }
                
            } else {

                // does nothing and returns if there is already a decimal
                return;
            }
        }
});

// listen for press on operator button and respond accordingly

operatorButton.forEach((div) => {
    div.addEventListener('click', () => {
        //when you enter into an operation, remove decimal limitation from Y
        isDecimalY = false;
        isY = true;

        //if x is 0, set operated to true if you hit an operator
        if(x === 0) {
            operated = true;
            isY = true;
        }

        let previousOperator = operator;

        if(operated === true) {
            
            // check for divide by zero error first - reset and return if found.
            if(previousOperator === "/" && y === 0) {
                displayValue = "ERR0R!";
                display.innerText = displayValue;
                operator = "";
                displayValue = "";
                x = 0;
                isY = false;
                y = 0;
                isDecimalX = false;
                isDecimalY = false;
                displayValue = "";
                operated = false;
                previousDisplay.innerText = "";
                return;
            }

            if(previousOperator === "+") {
                let sum = add(x, y);
                displayValue = sum;
                display.innerText = displayValue;
                x = sum;
                y = 0;
            }

            if(previousOperator === "-") {
                let difference = subtract(x, y);
                displayValue = difference;
                display.innerText = displayValue;
                x = difference;
                y = 0;
            }

            if(previousOperator === "*") {
                let product = multiply(x, y);
                displayValue = product;
                display.innerText = displayValue;
                x = product;
                y = 0;
            }

            if(previousOperator === "/") {
                let quotient = divide(x, y);
                displayValue = quotient;
                display.innerText = displayValue;
                x = quotient;
                y = 0;
            }

            //convert to scientific notation on overflow
            displayString = displayValue.toString();
            if(displayString.length > 12) {
            displayInteger = parseInt(displayString);
            integerNotation = displayInteger.toExponential(7);
                displayValue = integerNotation;
                display.innerText = displayValue;
            }
            displayvalue = "";
        }

        //update previous display with operator
        previousDisplay.innerText = event.target.innerText;
        operator = previousDisplay.innerText;
        // reset the display value once an operator is hit
        displayValue = "";
        //set operated to true, initializes chained math
        operated = true;
            
    });
});

// AC button function - clear everything and update displays

AC.addEventListener('click', () => {
    //clear x and y values
    x = 0;
    isY = false;
    y = 0;
    //clear isDecimal
    isDecimalX = false;
    isDecimalY = false;
    //clear displayValue and update display
    displayValue = "0";
    display.innerText = displayValue;
    //clear previous display
    operator = "";
    operated = false;
    previousDisplay.innerText = "";
});

//backspace key

backspace.addEventListener('click', () => {
    let displayLength;
    let slice;
    //if it's x, backspace x
    if(y === 0 && previousDisplay.textContent === "") {
        if(x === 0) {
            return;
        }

    displayLength = displayValue.length;
    slice = displayValue.slice(displayLength-1, displayLength);
    displayValue = displayValue.slice(0, displayLength-1);
    if(slice === ".") {
        isDecimalX = false;
    }
    display.innerText = displayValue;
    x = parseInt(displayValue);
    }

    //if it's y, backspace y
    if(y != 0 && previousDisplay.textContent != "") {
        if(y ===0) {
            return;
        }
    displayLength = displayValue.length;
    slice = displayValue.slice(displayLength-1, displayLength);
    displayValue = displayValue.slice(0, displayLength-1);
    if(slice === ".") {
        isDecimalY = false;
    }
    display.innerText = displayValue;
    y = parseInt(displayValue);
    }

});

/*run an operator function when the equals button is pressed
    only works if there is an x value, y value, and an operator
    else it just returns */

    equals.addEventListener('click', () => {

        // does not work if no operator
        if(!operator || operator === "") {
            console.log("no operator or x/y value");
            return;
        }

        //throws an error if dividing by 0
        if(operator === "/" && y === 0) {
            displayValue = "ERR0R!";
            display.innerText = displayValue;
            operator = "";
            displayValue = "";
            x = 0;
            isY = false;
            y = 0;
            isDecimalX = false;
            isDecimalY = false;
            displayValue = "";
            operated = false;
            previousDisplay.innerText = "";
            return;
        }

        //add operation
        if(operator === "+") {
            let sum = add(x, y);
            displayValue = sum;
            //clear out operator so it's not used again
            operator = "";
        }

        //subtract operation
        if(operator === "-") {
            let difference = subtract(x, y);
            displayValue = difference;
            //clear out operator so it's not used again
            operator = "";
        }

        //multiply operation
        if(operator === "*") {
            let product = multiply(x, y);
            displayValue = product;
            //clear out operator so it's not used again
            operator = "";
        }

        if(operator === "/") {
            let quotient = divide(x, y);
            displayValue = quotient;
            //clear out operator so it's not used again
            operator = "";
        }

        
        // if check to prevent text overflow - convert to scientific notation
        displayString = displayValue.toString();
        if(displayString.length > 12) {
        displayInteger = parseInt(displayString);
        integerNotation = displayInteger.toExponential(7);
            displayValue = integerNotation;
        }

        display.innerText = displayValue;

        //reset previous display
        previousDisplay.innerText = "";
    });