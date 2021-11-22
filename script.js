// initialize primary display as a variable that begins as blank

let displayValue = "";
display.innerText = displayValue;

// query selector for the number and operator buttons.

const numberButton = document.querySelectorAll('.numberButton');
const operatorButton = document.querySelectorAll('.operatorButton');

// opeator variable to tell calculator which operator is performing;

let operator;

// check if number is a decimal

let isDecimalX = false;
let isDecimalY = false;

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

// event listener that populates displayValue with user inputted numbers

numberButton.forEach((div) => {
    div.addEventListener('click', () => {

        //if there's no operator, then we set the x variable first

            if(!operator) {

                // limit user input to 12 digits
                if(displayValue.length < 12) {

                    displayValue += event.target.innerText;
                    console.log(displayValue);
                    display.innerText = displayValue;
                    x = parseFloat(displayValue);
                }

            } else {

            //if there is an operator, set the y variable

                // limit user input to 12 digits
                if(displayValue.length < 12) {

                    displayValue += event.target.innerText;
                    console.log(displayValue);
                    display.innerText = displayValue;
                    y = parseFloat(displayValue);
                }
            }
    });
});

// listen for a decimal point and limit its usage if number isDecimal

decimalButton.addEventListener('click', () => {

        //if there is no operator and no decimal, add a decimal to x value and confirm isDecimal

        if(!operator) {
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
                    isDecimal = true;
                }
            } else {

                // does nothing and returns if there is already a decimal
                return;
            }
        } else {

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
                }
                
            } else {

                // does nothing and returns if there is already a decimal
                return;
            }
        }
});

operatorButton.forEach((div) => {
    div.addEventListener('click', () => {
        if(!displayValue) {
            return;
        }
        //update previous display with old display value;
        previousDisplay.innerText = event.target.innerText;
        operator = previousDisplay.innerText;
        // reset the display value once an operator is hit
        displayValue = "";
    })
});

// AC button function - clear everything and update displays
AC.addEventListener('click', () => {
    //clear x and y values
    x = 0;
    y = 0;
    //clear isDecimal
    isDecimalX = false;
    isDecimalY = false;
    //clear displayValue and update display
    displayValue = "";
    display.innerText = displayValue;
    //clear previous display
    operator = "";
    previousDisplay.innerText = "";
});

/*run an operator function when the equals button is pressed
    only works if there is an x value, y value, and an operator
    else it just returns */

    equals.addEventListener('click', () => {

        // does not work if proper variables aren't in place
        if(!operator || operator === "" || x === 0 || !x || y === 0 || !y) {
            console.log("no operator or x/y value");
        }

        //throws an error if dividing by 0
        if(operator === "/" && y === 0) {
            displayValue = "WHAT";
            display.innerText = displayValue;
            operator = "";
            displayValue = "";
            x = 0;
            y = 0;
            previousDisplay.innerText = "";
            return;
        }

        //add operation
        if(operator === "+") {
            let sum = add(x, y);
            displayValue = sum;
            display.innerText = displayValue;
            //clear out operator so it's not used again
            operator = "";
            previousDisplay.innerText = operator;
        }

        //subtract operation
        if(operator === "-") {
            let difference = subtract(x, y);
            displayValue = difference;
            display.innerText = displayValue;
            //clear out operator so it's not used again
            operator = "";
            previousDisplay.innerText = operator;
        }

        //multiply operation
        if(operator === "*") {
            let product = multiply(x, y);
            displayValue = product;
            display.innerText = displayValue;
            //clear out operator so it's not used again
            operator = "";
            previousDisplay.innerText = operator;
        }

        if(operator === "/") {
            let quotient = divide(x, y);
            displayValue = quotient;
            display.innerText = displayValue;
            //clear out operator so it's not used again
            operator = "";
            previousDisplay.innerText = operator;
        }
        isDecimalY = false;
    });