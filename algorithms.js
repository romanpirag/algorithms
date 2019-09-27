// Welcome to algorithms🦄

// REVERSE STRING --------------------------------------------------------------------------------------------------------------------------------------------

// Write a function that will take a string as input, and return a new string with the same letters in reverse order.

// 1. I am going to Create a function called reverse String
// 2. I am going to pass in the sting as an argument
// 3. I am going to declaire a variable called stringSlice and set it equal to the string argument and use the builtin method .slice with two ("") inside
// 4. This creates a new array with every element of the string divided
// 7. I am going to declair a new variable called reversed and set it equal to an empty array
// 5. Now I am going to use the built in method .map on the stringSplit array
// 6. The map() method creates a new array with the results of calling a provided function on every element in the calling array.
// 8. Within the .map method I am going to .unshift every element of the array into the newly made reversed array.
// 9. I am going to return the reversed array after I use the .join method in order to make it back into a string

// const reverseString = (string) => {
//   let stringSplit = string.split("")
//   let reversed = []
//   stringSplit.map(letter => {
//     reversed.unshift(letter)
//   })
//   return reversed.join("")
// }

// console.log(reverseString("LOKI"))

// FACTORIAL --------------------------------------------------------------------------------------------------------------------------------------------

// Write a function that takes an integer 'num' in; it should return n*(n-1)*(n-2)*...etc

// 1. I create a function called factorial and pass in num as the argument
// 2. I declaire a variable and set it equal to 1
// 3. I create a for loop which states that while num is greater than 0 num should decrememt
// 4. within the for loop set the result to equal result * num

// ** Make sure to not write let before the variable if using the argument within the for loop.

// const factorial = num => {
//   let result = 1
//   for (num; num > 0; num--) {
//     result *= num
//   }
//   return result
// }

// console.log(factorial(3))

// LONGEST WORD --------------------------------------------------------------------------------------------------------------------------------------------

// Write a function that takes in a string. Return the longest word in the string.

// 1. Im going to create a function called longest string that takes a string (a sentence) as an argument
// 2. I will declaire a variable called stringSplit and set it equal to the string argument and use the split method to create an array of every word.
// 3. I will declare variable longestWord and set it equal to an empty string.
// 4. I will then use the built in .find method on the stringSplit array
// 5. and say if the variable within .find is longer than longestWord then longestWord becomes the variable within .find

// const longestWord = string => {
//   let longest = ""
//   let stringSplit = string.split(" ")
//   stringSplit.find(word => {
//     if (word.length > longest.length) {
//       longest = word
//     }
//   })
//   return longest
// }

// console.log(longestWord("I am a giant porange fluffy cat"))

// SUM NUMS--------------------------------------------------------------------------------------------------------------------------------------------

// Write a function that takes in an integer 'num' and returns the sum of all integers between
// Zero and num, up to and including 'num'.

// 1. I create a function called sumNums and pass in num as the argument.
// 2. I declare a variable called sum and set it equal to zero.
// 3. I create a for loop which says that while num is greater or equal to zero, sum equals sum plus num.
// 4. I return sum

// const sumNums = num => {
//   let sum = 0
//   for (num; num >= 0; num --) {
//     sum += num
//   }
//   return sum
// }

// console.log(sumNums(2))

// Time Conversion--------------------------------------------------------------------------------------------------------------------------------------------

// 1. I am creating a function called timeConversion and passing minutes into the argument.
// 2. I am declaring the variable hours and setting it equal to zero.
// 3. I am creating a for loop and stating that while minutes is greater or equal to 60, decrement 60 from minutes, and add 1 to hours for every pass.
// 4. I am returning an interpulated string which has the strings Hours Minutes followed by the variables for hours and minutes.

// If you want any number below ten to have a zero in front of it you have to do the following:

// 1. I create a conditional statement, if minutes is less than 10, then you have to use interpolation and add a zero in front of it.

// const timeConversion = minutes => {
//   let hours = 0
//   for (minutes; minutes >= 60; minutes -= 60) {
//     hours += 1
//   }

//   if(minutes < 10) {
//     minutes = `0${minutes}`
//   }

//   return `HOURS:${hours} MINUTES:${minutes}`
// }

// console.log(timeConversion(62))

// Count Vowels--------------------------------------------------------------------------------------------------------------------------------------------

// Write a method that takes a string and returns the number of vowels
// in the string. You may assume that all the letters are lower cased.
// You can treat "y" as a consonant.

// 1. I am creating a function called countVowels and passing in string as the argument.
// 2. I am declaring a variable called vowels and setting it equal to an array with all the vowels within it (a,e,i,o,u)
// 3. I am declaring a varialbe called vowelCounter and setting it equal to zero.
// 3. Next I am creating a for loop and iterating through the elements within the string by index.
// 4. Then I am creating a conditional statement that says if the variable vowels includes an element from string, vowelCount increments.

// function countVowels(string) {
//   let vowels = ["a", "e", "i", "o", "u"]
//   let vowelCounter = 0

//   for (let i = 0; i < string.length; i++) {
//     if (vowels.includes(string[i])) {
//       vowelCounter++
//     }
//   }
//   return vowelCounter
// }

// console.log(countVowels("aae"))

// Is Prime--------------------------------------------------------------------------------------------------------------------------------------------

// const isPrime = num => {
//   if (num <= 1) {
//       return false
//   }

//   for (let i = 2; i < num; i ++) {
//       if (num % i === 0) {
//           return `Not Prime🤬`
//       }
//   }
//   return "Prime!!🦋"
// }

// console.log(isPrime(7))

// Factorial ----------------------------

// const factorial = num => {
//     let sum = 1
//     for (num; num > 0; num--) {
//         sum *= num
//     }
//     return sum
// }

// console.log(factorial(6))

// Fibonacci ----------------------------

// const fibonacci = num => {
//   if (num === 0) {
//     return 0
//   } else if (num === 1) {
//     return 1
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2)
//   }
// }

// console.log(fibonacci(10))

// isSorted----------------------------

// const isSorted = array => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         return "NOT SORTED"
//       }
//     }
//   }
//   return "SORTED!!"
// }

// console.log(isSorted([7, 8, 10]))

// filter----------------------------

// const filter = (array, callback) => {
//     let lessThan = []
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//             lessThan.push(array[i])
//         }
//     }
//     return lessThan
// }

// console.log(filter([1, 2, 3, 4], n => n < 3))

// reduce----------------------------

// const reduce = (array, callback, startingValue) => {
//     for (let i = 0; i < array.length; i++) {
//       startingValue = callback(startingValue, array[i])
//     }
//     return startingValue
// }

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0))

// mostCommonLetter----------------------------

// const mostCommonLetter = string => {
//   let letterCount = {}
//   for (let i = 0; i < string.length; i++) {
//     if (letterCount[string[i]]) {
//       letterCount[string[i]] += 1
//     } else {
//       letterCount[string[i]] = 1
//     }
//   }

//   let highest = 0
//   let highestObj = []

//   Object.keys(letterCount).forEach(letter => {
//     let value = letterCount.letter
//     console.log(value)
//     if(value > highest) {
//         highest = value
//         highestObj = [letter, value]
//     }
//   })

//   return highestObj

// }

// console.log(mostCommonLetter("Battttmaxxxx"))

// mostCommonLetter----------------------------

// const mostCommonLetter = string => {
//   let mcl
//   let mclc = 0

//   for (let i = 0; i < string.length; i++) {
//     let count = 0
//     for (let j = 0; j < string.length; j++) {
//       if (string[i] === string[j]) {
//         count += 1
//       }
//     }
//     if (count > mclc) {
//       mcl = string[i]
//       mclc = count
//     }
//   }
//   return [mcl, mclc]
// }

// console.log(mostCommonLetter("Happppppppppycakes"))

// FizzBuzz----------------------------
// Create a function which takes in a number. Output 0 to that number.
// If a number is divisible by 3 log the word fizz.
// If its divisible by 5 log buzz.
// If its divisible by 3 and 5 then log fizzBuzz.

// const fizzBuzz = num => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
//   }
// }

// fizzBuzz(40)

// isPalindrom----------------------------

// function isPalindrome(string) {
//   let stringLowerCase = string.toLowerCase()
//   let stringSplit = stringLowerCase.split("")
//   let validCharacters = "abcdefghijklmnopqrstuvwxyz".split("")
//   let characters = []
//   let reversed = []
//   for (let i = 0; i < string.length; i++) {
//     if (validCharacters.includes(stringLowerCase[i])) {
//       characters.push(stringLowerCase[i])
//     }
//   }
 
//   for (let j = 0; j < characters.length; j++) {
//     reversed.unshift(characters[j])
//   }

//   if (characters.join("") === reversed.join("")) {
//     return true
//   }

//   return false
// }

// console.log(isPalindrome("Madam I'm Adam"))

// mostCommonletter----------------------------

// 1. Going to create an empty object called letterCount
// 2. Im going to split the string argument and set it to the variable splitString
// 3. Im going to create a conditional for loop going through the new splitString array
// 4. Im going to check if key exists within letterCount, if yes add 1. If no, create it and set to 1. 
// 5. Im going to then figure out how to check the values of the object and 


// const mostCommonLetter = string => {
//     let letterCount = {}
//     for(let i = 0; i < string.length; i++) {
//         if(letterCount[string[i]]) {
//             letterCount[string[i]] += 1
//         } else {
//             letterCount[string[i]] = 1 
//         }
//     }
    
//     let highest = 0
//     let highestObj = []

//     Object.keys(letterCount).forEach(letter => {
//         let value = letterCount[letter]
//         if(value > highest) {
//             highest = value 
//             highestObj = [letter, value]
//         }
    
//     })

//     console.log(highestObj)


// }


// console.log(mostCommonLetter("battttttman"))



