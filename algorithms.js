// Welcome to algorithms🦄

// Write a method that takes a string and returns the number of vowels
// in the string. You may assume that all the letters are lower cased.
// You can treat "y" as a consonant.

// 1. Going to create create a palindrome function
// 2. Going to split the string that is given which creates an array of letters
// 3. I will iterate through the string with two for loops, one going forwards and one backwards
// 4. I will store the respective results in new variables, one titled forward, the other named back
// 5. I will compare the forward and back variables, and return false if they are ever different from eachother.
// 6. The function will return true if the false condition is never met.

const palindrome = string => {
    let reversed = []
    for(let i = 0; i < string.length; i++) {
        reversed = string[i] + reversed 
    }
    
    if(string !== reversed) {
        return "NOT PALINDROME"
    }

    return "PALINDROME!!!"
}

console.log(palindrome("racecar"))
