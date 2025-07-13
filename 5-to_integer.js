// Get the first argument passed to the script
const arg = process.argv[2];
// Convert the argument to an integer
const num = parseInt(arg);
// Check if the conversion is valid
if (!isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}