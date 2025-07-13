// Get the arguments passed to the script
const args = process.argv;
// Check if the first argument is present
if (args[2] === undefined) {
    console.log("No argument");
} else {
    console.log(args[2]);
}
