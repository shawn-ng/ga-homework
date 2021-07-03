/* eslint-disable no-unused-vars */

// ? Below is a demo function to practice running the automated tests.
// ? add the statement 'return []' to the function, save the file.
// ? Run the tests with the command inside your terminal 'npm run test'
// ? You should now see this demo test passing in the ouput report
function demo(array) {
  return []
}

// ? using `filter` write a function which returns all the string elements in an array
// ? eg: stringsOnly([10, 'Mike', '23', NaN, 'elephant']) => ['Mike', '23', 'elephant']

function stringsOnly(array) {
  const filtering = array.filter(function(item){
    return typeof item == "string"
  })
  return filtering
}

// ? using `map` write a function that converts an array of farenheit values to celcius
// ? eg: convertTemps([23, 140, 212, 41]) => [-5, 60, 100, 5]

function convertTemps(array) {
  const switching = array.map(function(value){
    return (value-32) * 5/9
  })
  return switching
}

// ? using `map` write a function that returns the total number of characters of each character in an array of words
// ? eg: characterCount(['Stay', 'hungry', 'stay', 'foolish']) => [4, 5, 4, 7]

function characterCount(array) {
  const count = array.map(string => string.length)
  return count
}

// ? using `filter` write a function that returns an array only containing falsey value
// ? eg: containsFalsey([100, {}, [], 'Mike']) => false, containsFalsey([100, {}, NaN, 'Mike', '', null]) => [NaN, '', null]

function containsFalsey(array) {
  const falsey = array.filter(item => Boolean(item) === false)
  return falsey
}

// ? using any array method, write a function that returns the string elements of an array that have a given number of characters or larger
// ? eg: wordsOfLength(['emu', 'caterpiller', 'rooster'], 4) => ['caterpiller', 'rooster']

function wordsOfLength(array, minLength) {
  const  check = array.filter(string => string.length >= minLength)
  return check
}

// ? using any array method, write a function that converts an array of measurements as strings, into an array of numbers
// ? eg: measurementToNumber(['10cm', '4.2cm', '205cm']) => [10, 4.2, 205]

function measurementToNumber(array) {
  const convert = array.map(function(string){
    return parseFloat(string.slice(0,-2))
  })
  return convert
}

// ? using `split` and `filter` write a function that counts the number of vowels in a sentence
// ? eg: numberOfVowels('Stay classy San Diego') => 6

function numberOfVowels(string) {
  const stringSplit = string.toLowerCase().split("")
  const checkVowels = stringSplit.filter(function(eachChar){
    return eachChar.includes("a") || eachChar.includes("e") || eachChar.includes("i") ||eachChar.includes("o") || eachChar.includes("u")
  })
  return checkVowels.length
}

// ? using, `split`, `map` and `join`, write a function that capitalises the first letter of each word in a sentance
// ? eg: titleCase('The lord of the rings') => 'The Lord Of The Rings'

function titleCase(string) {
  const splitString = string.split(" ")
  const convert = splitString.map(function(word){
    return word[0].toUpperCase() + word.slice(1)
  })
  return convert.join(" ")
}

// ! please do not alter below ✋

module.exports = {
  demo,
  stringsOnly,
  convertTemps,
  characterCount,
  containsFalsey,
  wordsOfLength,
  measurementToNumber,
  numberOfVowels,
  titleCase
}
