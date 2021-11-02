
"use strict"

const sentence = "hello there from lighthouse labs"; 

let delay = 500
const strAnimation = function(str) {
  
  for (const char of str) {
    setTimeout(() => process.stdout.write(char), delay);
    delay += 100
  }
  setTimeout(() => console.log('\n'), delay + 50);
}
strAnimation(sentence);


// // console.log();
// process.stdout.write('/r/n');