// Implement an algo to determine if a string has all unique chars. What if you cannot use additional data structures?

// O(N^2) time complexity

function isUnique(str) {
  if (str.length > 128) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
}

console.log(isUnique('ashtonnkc'));
