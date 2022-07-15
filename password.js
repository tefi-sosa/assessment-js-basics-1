let password = "Be$tpassword.9";

//Check to see if it is over minimun length and less than maximum length

if (password.length >= 10 && password.length <= 20) {
    console.log("Password length: Success!")
} else {
    console.log("Password length: Failure")
}

//Check to see if it has at least one letter

if (/[a-z]/.test(password) === true) {
    console.log("Contains at least one letter: Success!")
} else {
    console.log("Contains at least one letter: Failure")
}

//Check to see if it has at least one uppercase letter

if (/[A-Z]/.test(password) === true) {
    console.log("Contains at least one upper case: Success!")
} else {
    console.log("Contains at least one upper case: Failure")
}

//Check to see if it has at least one number

if (/[0-9]/.test(password) === true) {
    console.log("Contains at least one number: Success!")
} else {
    console.log("Contains at least one number: Failure")
}

//Check to see if it has special characters 

const specialChars = /[`!@#$%^&*()_+\-={};':"|,.<>?~]/;

if (specialChars.test(password) === true) {
    console.log("Contains at least one special character: Success!")
} else {
    console.log("Contains at least one special character: Failure")
}

// let splitPass = password.split('');
// console.log(splitPass);

