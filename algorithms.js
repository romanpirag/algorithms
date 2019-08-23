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

// FACTORIAL --------------------------------------------------------------------------------------------------------------------------------------------