function shout (string) {
  return string.toUpperCase()
}

function whisper (string) {
  return string.toLowerCase()
}

function logShout (string) {
  console.log('HELLO')
  return string.toUpperCase
}

function logWhisper (string) {
  console.log('hello')
  return string.toLowerCase
}

var uppercase = 'HELLO!'
uppercase.toUpperCase('HELLO!') === uppercase

var lowercase = 'hello!'
lowercase.toLowerCase('hello!') === lowercase

var mixedCase = "Hi there!"
mixedCase.toLowerCase() === mixedCase
mixedCase.toUpperCase() === mixedCase


function sayHiToGrandma (string) {
  console.log("hello!")
  return "I can't hear you!";
  console.log("HELLO!")
  return "YES INDEED!";
  console.log("I love you, Grandma.")
  return "I love you, too."
}
