var readline = require("readline");
function hcf(a, b) {
    // Base case: if b is zero, return a
    if (b === 0) {
        return a;
    }
    // Recursive case: return the hcf of b and the remainder of a/b
    return hcf(b, a % b);
}
// Define a function to find the hcf of all elements in an array
function hcfArray(arr) {
    var answer = arr[0];
    for (var i = 1; i < arr.length; i++) {
        answer = hcf(answer, arr[i]);
    }
    return answer;
}
function subtractionGame(lines) {
    var testCases = Number(lines[0]);
    var line1;
    var line2;
    for (var i = 1; i <= testCases * 2; i++) {
        line1 = lines[i];
        line2 = lines[++i];
        // even => 2
        // else => 1
        var arr = line2.split(" ").map(Number);
        var evens = 0;
        console.log(hcfArray(arr));
    }
}
var rl = readline.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) { return input.push(line); }).on("close", function () {
    subtractionGame(input);
});
