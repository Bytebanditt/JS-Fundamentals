// Recursive function to compute factorial
function factorial(n) {
    // Base case: factorial of 0 or NaN is 1
    if (n <= 1 || isNaN(n)) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}
// Get the first argument passed to the script
const arg = process.argv[2];
// Convert the argument to an integer
const num = parseInt(arg);
// Compute and print the factorial
console.log(factorial(num));