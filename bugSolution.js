```javascript
function doSomething(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  //Handle case where both a and b are not null
  return a + b; // Or perform other operations as needed
}

console.log(doSomething(null, 5)); // Output: null
console.log(doSomething(5, null)); // Output: null
console.log(doSomething(5, 5)); // Output: 10 //Correct output!
```