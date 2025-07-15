// three

let inputString = prompt("please enter the string you want ?")
if (inputString) {

    let stringAfterSplit = inputString.toLowerCase().split("")

    let result = stringAfterSplit.filter((char) => {
        return char == "e"
    })
    console.log(`the number of 'e' in your string is ==> ${result.length}`)

} else {
    console.error("please enter vaild string !!")
}