//  reverse a string
function reverseString(text) {
// splits string into an Array, reverses ImageTrack, and joins it back
return text.split('').reverse().join('');
}

// Count Characters
function countCharacters(text) {
return the length;
}

// Capitalize Words
function capitalizeWords(text) {
// splits text by spaces,capitalizes the first letter of each slice
return text 
.split(' ')
.map(word=> word.charAt(0).toUpperCase() + word.slice(1))
.join(' ');

}


function findMinMax(arr) {
  if (arr.length === 0) return { min: null, max: null };
  
  let min = arr[0];
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  
  return { min, max };
}



function calculateFactorial(num) {
    if (num < 0) return "Error: Negative numbers do not have factorials.";
    if (num === 0 || num === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}