// two

function palindrome(string) {
    let ask = prompt("you consider the case of the string [y : n] ? ")
    if (ask) {
        if (ask == "y") {

            let reversedString = string.split('').reverse().join('');
            if (reversedString == string) {
                console.log("The string is a palindrome !!")
            } else {
                console.log("The string is not a palindrome !!")
            }

        } else {
            let editString = string.toLowerCase();

            let reversedString = editString.split('').reverse().join('');
            if (reversedString == editString) {
                console.log("The string is a palindrome !!")
            } else {
                console.log("The string is not a palindrome !!")
            }
        }
    } else {
        console.log("please enter a valid char .")
    }
}

// palindrome("moh")
palindrome("mooom")
