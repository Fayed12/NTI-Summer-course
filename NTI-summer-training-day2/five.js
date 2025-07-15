let number = prompt("enter 3 numbers without space ?") 
let box = document.querySelector(".box")

if (number && number.length === 3 && /^[0-9]{3}$/.test(number)) {
    let arrayOfNums = number.split("").map(Number);
    
    if (arrayOfNums[0] == 0 || arrayOfNums[1] == 0 || arrayOfNums[2] == 0) {
        alert("zeros is not valid");
    } else {
        box.classList.toggle("display")
        let add = arrayOfNums[0] + arrayOfNums[1] + arrayOfNums[2];
        document.getElementById("addition").textContent = add;

        let mult = arrayOfNums[0] * arrayOfNums[1] * arrayOfNums[2];
        document.getElementById("Multiplication").textContent = mult;

        let Division = arrayOfNums[0] / arrayOfNums[1] / arrayOfNums[2];
        document.getElementById("Division").textContent = Division.toFixed(3);
    }
} else {
    console.log("Please enter exactly 3 digits (0-9) without spaces.");
    alert("Please enter exactly 3 digits(0 - 9) without spaces.")
}