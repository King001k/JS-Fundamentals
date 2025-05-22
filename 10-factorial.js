// Step 1: Get the number from command line
const num = parseInt(process.argv[2]);

// Step 2: Define recursive factorial function
function factorial(n) {
  if (isNaN(n) || n < 0) {
    return 1; // If input no valid or negative, return 1
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1); // Recursion
}

// Step 3: Call function and print result
console.log(factorial(num));
