var readline = require("readline");
function ballGame(lines) {
    var n = Number(lines[0]);
    var c;
    var a = 1;
    var b = 1;
    var result = [];
    for (var i = 0; i < n - 1; i++) {
        c = a + b;
        if (c > n) {
            c = c - a;
        }
        result.push(c);
        a = c;
        b = b + 1;
    }
    console.log(result);
}
var rl = readline.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) { return input.push(line); }).on("close", function () {
    ballGame(input);
});
