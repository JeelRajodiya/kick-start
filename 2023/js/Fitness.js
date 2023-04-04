var readline = require("readline");
function Fitness(lines) {
    var testCases = Number(lines[0]);
    for (var i = 1; i <= testCases; i++) {
        console.log(Number(lines[i]) * 2 * 5);
    }
}
var rl = readline.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) { return input.push(line); }).on("close", function () {
    Fitness(input);
});
