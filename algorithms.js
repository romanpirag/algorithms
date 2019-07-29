// Welcome to algorithms🦄

// Write a method that takes a string in and returns true if the letter
// "z" appears within three letters **after** an "a". You may assume
// that the string contains only lowercase letters.

const nearbyAZ = string => {
  for (let i = 0; i < string.length; i++) {
    let g = i + 3
    if (string[i] === "a") {
      for (let j = i + 1; j <= g; j++) {
        if (string[j] === "z") {
          return true
        }
      }
    }
  }

  return false
}

console.log(nearbyAZ("bbbbbabbzbbbb"))
