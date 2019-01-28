// Write a method to replace all spaces in a string with %20. You may assume that the string has sufficient space at the end to hold the additional chars, and that you are given the true length of the string.

function urlify(string) {
  return string
    .split('')
    .map(el => (el === ' ' ? '%20' : el))
    .join('');
}

console.log(urlify('Mr John Smith'), 'Mr%20John%20Smith');
