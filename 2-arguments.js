// Get the number of arguments passed
const args = process.argv.slice(2); // Slice to ignore the first two elements
// Check the number of arguments and print the appropriate message
if (args.length === 0) {
    console.log("No argument");
} else if (args.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}