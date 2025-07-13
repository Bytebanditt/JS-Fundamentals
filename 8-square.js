// Get the first argument passed to the script
const arg = process.argv[2];
// Convert the argument to an integer
const size = parseInt(arg);
// Check if the conversion is valid
if (isNaN(size) || size <= 0) {
    console.log("Missing size");
} else {
    // Print the square
    for (let i = 0; i < size; i++) {
        let line = '';
        for (let j = 0; j < size; j++) {
            line += 'X';
        }
        console.log(line);
    }
}