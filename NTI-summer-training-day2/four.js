let nameReg = /^[a-z]+(?: [a-z]+)*$/;
let phoneReg = /^01[0125][0-9]{8}$/;
let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

while (true) {
    let name;
    while (true) {
        name = prompt("write your name !");
        if (name === null) {
            console.log("name input Canceled by user.");
            continue;
        }
        if (nameReg.test(name)) {
            break;
        } else {
            console.log("Invalid name");
        }
    }

    // if (name === null) break;

    let phone;
    while (true) {
        phone = prompt("enter your phone number !");
        if (phone === null) {
            console.log("phone number input Canceled by user.");
            continue;
        }
        if (phoneReg.test(phone)) {
            break;
        } else {
            console.log("Invalid phone number !");
        }
    }

    // if (phone === null) break;

    let email;
    while (true) {
        email = prompt("enter your email !");
        if (email === null) {
            console.log("email input Canceled by user.");
            continue;
        }
        if (emailReg.test(email)) {
            break;
        } else {
            console.log("Invalid email format !");
        }
    }

    // if (email === null) break;

    // All inputs are valid, print once
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    break;
}