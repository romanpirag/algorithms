// Welcome to algorithms🦄

// Write a method that takes a string and returns the number of vowels
// in the string. You may assume that all the letters are lower cased.
// You can treat "y" as a consonant.

function palindrome(string) {
  
    for (let i = 0; i < string.length; i++) {
        for (let j = string.length - 1; j >= 0; j--) {
            if (string[j] !== string[i]) {
                return false 
            }
        }
    }
  
    return true 

}

console.log(palindrome("racecar"))
