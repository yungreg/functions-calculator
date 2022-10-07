const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

const subtract = (firstNumber, secondNumber) => {
    const subtractedValue = firstNumber - secondNumber
    return subtractedValue
} 

const divide = (firstNumber, secondNumber) => {
    const dividedValue = firstNumber / secondNumber
    return dividedValue
}

const multiply = (firstNumber, secondNumber) => {
    const mulitpliedValue = firstNumber * secondNumber
    return mulitpliedValue
}
// "square" is also called Exponentiation. it's the same as "to the power of".
// Represented by the ** operator between two numbers.
const square = (exponentParam) => {
    const squaredValue = exponentParam * exponentParam
    return squaredValue
}

let numberOfFourLeggedAnimals = divide(60, 4) //this is 15, so I'll have to round the sum up to 16, since no animal has 3 legs.
let numberOfTwoLeggedAnimals = subtract(60,15) //cd fdun

console.log(numberOfFourLeggedAnimals)
console.log(numberOfTwoLeggedAnimals)

//note: so.. my functions are working correctly, but I don't think this logically makes any sense considerting what the question is asking. I think if it asked how many 