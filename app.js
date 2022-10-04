alert("Hey folks! no data is being stored in this app so relax and have fun 😉")
const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const btnCheck = document.querySelector("#check-number")
const output = document.querySelector("#output")


function calculateSum(date) {
    date = date.replaceAll("-", "");
    var sum = 0;
    for(let digit of date) {
        sum = sum + Number(digit);
    }
    return sum;
}

function calculateLuckyNumber(sum, num) {
    if(sum % num === 0) {
        showMessage("Bingo " + num + " is your lucky number 🎉")
    } else {
        showMessage("Noooo!! " + num + " is not your lucky number 🥺")
    }
}

function showMessage(message) {
    output.innerText = message;
}

btnCheck.addEventListener("click", function checkLuckyNumberHandler() {
    if(dateOfBirth.value && luckyNumber.value) {
        var sum = calculateSum(dateOfBirth.value);
        console.log(sum)
        calculateLuckyNumber(sum, luckyNumber.value);
    } else {
        showMessage("Please enter both the inputs 🧐")
    }
})
