```javascript
function doSomething(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }

  // ...rest of your function
}

console.log(doSomething(null, 5)); // Output: null
console.log(doSomething(5, null)); // Output: null
console.log(doSomething(5, 5)); // Output: undefined // Unexpected behavior!
```