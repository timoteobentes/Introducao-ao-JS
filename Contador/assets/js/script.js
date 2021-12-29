var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    var alt = document.getElementById('currentNumber');
    if (currentNumber < 0) {
        alt.style.color = "red";
    } else {
        alt.style.color = "white";
    }
}