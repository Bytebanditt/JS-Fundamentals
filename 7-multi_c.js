// Get the first argument passed to the script
const arg = process.argv[2];
// Convert the argument to an integer
const x = parseInt(arg);
// Check if the conversion is valid
if (isNaN(x) || x <= 0) {
    console.log("Missing number of occurrences");
} else {
    // Print "C is fun" x times
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}