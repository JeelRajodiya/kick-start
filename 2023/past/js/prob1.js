var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var readline = require("readline");
function angryStudents(lines) {
    var testCases = Number(lines[0]);
    var line1;
    var line2;
    for (var i = 1; i <= testCases * 2; i++) {
        line1 = lines[i];
        line2 = lines[++i];
        var sequence = line2.split("");
        // console.log(line2, sequence);
        var noOfA = sequence.filter(function (e) { return e === "A"; }).length;
        if (noOfA === 0) {
            console.log(0);
            return;
        }
        var remainingP = [];
        var j = -1;
        for (var i_1 = 0; i_1 < noOfA; i_1++) {
            remainingP[i_1] = 0;
        }
        for (var i_2 = 0; i_2 < sequence.length; i_2++) {
            var element = sequence[i_2];
            if (element === "A") {
                j++;
            }
            else if (element === "P" && j >= 0) {
                remainingP[j] += 1;
            }
        }
        var answer = 0;
        answer = Math.max.apply(Math, __spreadArray(__spreadArray([], remainingP, false), [answer], false));
        console.log(answer);
    }
}
var rl = readline.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) { return input.push(line); }).on("close", function () {
    angryStudents(input);
});
