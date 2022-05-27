// Array to hold all possible characters
// Button to generator 4 random password options
// Display password options
//// Stretch: ability to set password length
/////// Stretch: 1-click copy password to the clipboard (use <input type="text"> to display options)

const randomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const randomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const randomNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const randomSymbol = ["@", "%", "+", "=", "/", "'", "!", "?", "#", "^", "£", "$", "&", "(", ")"]
let rChars = randomLower + randomUpper + randomNumber + randomSymbol
const firstPassword = document.getElementById("first-password")
const secondPassword = document.getElementById("second-password")
const thirdPassword = document.getElementById("third-password")
const fourthPassword = document.getElementById("fourth-password")

function generatePassword() {
    firstResult()
    secondResult()
    thirdResult()
    fourthResult()
}

generatePassword()

firstResult()

function firstResult() {
    rChars = randomLower[Math.floor(Math.random() * 2)] + randomNumber[Math.floor(Math.random() * 10)] + randomUpper[Math.floor(Math.random() * 26)] + randomSymbol[Math.floor(Math.random() * 8)] + randomLower[Math.floor(Math.random() * 26)] + randomNumber[Math.floor(Math.random() * 10)] + randomUpper[Math.floor(Math.random() * 26)] + randomSymbol[Math.floor(Math.random() * 8)] + randomLower[Math.floor(Math.random() * 26)] + randomNumber[Math.floor(Math.random() * 10)] + randomUpper[Math.floor(Math.random() * 26)] + randomSymbol[Math.floor(Math.random() * 8)]
    firstPassword.textContent = rChars
}

function secondResult() {
    rChars = randomLower[Math.floor(Math.random() * 26)] + randomNumber[Math.floor(Math.random() * 10)] + randomUpper[Math.floor(Math.random() * 26)] + randomSymbol[Math.floor(Math.random() * 8)] + randomLower[Math.floor(Math.random() * 26)] + randomNumber[Math.floor(Math.random() * 10)] + randomUpper[Math.floor(Math.random() * 26)] + randomSymbol[Math.floor(Math.random() * 8)] + randomLower[Math.floor(Math.random() * 26)] + randomNumber[Math.floor(Math.random() * 10)] + randomUpper[Math.floor(Math.random() * 26)] + randomSymbol[Math.floor(Math.random() * 8)]
    secondPassword.textContent = rChars
}

function thirdResult() {
    rChars = randomLower[Math.floor(Math.random() * 26)] + randomNumber[Math.floor(Math.random() * 10)] + randomUpper[Math.floor(Math.random() * 26)] + randomSymbol[Math.floor(Math.random() * 8)] + randomLower[Math.floor(Math.random() * 26)] + randomNumber[Math.floor(Math.random() * 10)] + randomUpper[Math.floor(Math.random() * 26)] + randomSymbol[Math.floor(Math.random() * 8)] + randomLower[Math.floor(Math.random() * 26)] + randomNumber[Math.floor(Math.random() * 10)] + randomUpper[Math.floor(Math.random() * 26)] + randomSymbol[Math.floor(Math.random() * 8)]
    thirdPassword.textContent = rChars
}

function fourthResult() {
    rChars = randomLower[Math.floor(Math.random() * 26)] + randomNumber[Math.floor(Math.random() * 10)] + randomUpper[Math.floor(Math.random() * 26)] + randomSymbol[Math.floor(Math.random() * 8)] + randomLower[Math.floor(Math.random() * 26)] + randomNumber[Math.floor(Math.random() * 10)] + randomUpper[Math.floor(Math.random() * 26)] + randomSymbol[Math.floor(Math.random() * 8)] + randomLower[Math.floor(Math.random() * 26)] + randomNumber[Math.floor(Math.random() * 10)] + randomUpper[Math.floor(Math.random() * 26)] + randomSymbol[Math.floor(Math.random() * 8)]
    fourthPassword.textContent = rChars
}