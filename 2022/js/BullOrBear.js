var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
function precessInput(lines) {
    var testCases = parseInt(lines[0]);
    for (var i = 1; i <= testCases; i++) {
        var _a = lines[i].split(" ").map(function (x) { return parseInt(x); }), buy = _a[0], sell = _a[1];
        if (buy > sell) {
            console.log("LOSS");
        }
        else if (buy < sell) {
            console.log("PROFIT");
        }
        else {
            console.log("NEUTRAL");
        }
    }
}
var input = [];
rl.on("line", function (line) { return input.push(line); }).on("close", function () {
    return precessInput(input);
});
