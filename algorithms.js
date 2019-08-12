// Welcome to algorithms🦄

// Write a function that will take in a number of minutes, and returns a string that formats
// the number into "hours:minutes'.

function timeConversion(num) {

   let hours = 0
   for (num; num >= 60; num -= 60) {
     hours += 1
   }

   if (num < 10) {
    num = `0${num}`
   }

  return `HOURS: ${hours}: MINUTES: ${num}`
}

console.log(timeConversion(5))










// if (num >59){
  //   let hours = Math.floor(num / 60)
  //   let minutes = num%60
  //   if (minutes <10){
  //     return `${hours}:0${minutes}`
  //   }
  //   return `${hours}:${minutes}`
  // } if (num < 10){
  //   return  `0:0${num}`
  // }
  // return `0:${num}`
  