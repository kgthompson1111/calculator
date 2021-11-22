let displayValue = "";
display.innerText = displayValue;
const numberButton = document.querySelectorAll('.numberButton');
const operatorButton = document.querySelectorAll('.operatorButton');
// opeator variable to tell calculator which operator is performing;
let operator;

/* addition, subtraction, multiplication and division functions */

function add(x, y) {
    return Math.round(x + y);
}

function subtract(x, y) {
    return Math.round(x - y);
}

function multiply(x, y) {
    return Math.round(x * y);
}

function divide(x, y) {
    return Math.round(x / y);
}

// event listener that populates displayValue with user inputted numbers

numberButton.forEach((div) => {
    div.addEventListener('click', () => {
        //if there's no operator, then we set the x variable first
        if(!operator) {
            //if(displayValue.length < 8) {
                displayValue += event.target.innerText;
                console.log(displayValue);
                display.innerText = displayValue;
                x = parseInt(displayValue);
            //}
        } else {
        //if there is an operator, set the y variable
            //if(displayValue.length < 8) {
                displayValue += event.target.innerText;
                console.log(displayValue);
                display.innerText = displayValue;
                y = parseInt(displayValue);
            //}
        }
    });
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
    });