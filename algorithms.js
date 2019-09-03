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


const isPrime = num => {


}

isPrime(6)