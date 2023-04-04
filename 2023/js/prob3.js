var readline = require("readline");
// @ts-ignore
var mode = function (a) {
    // @ts-ignore
    a = a.slice().sort(function (x, y) { return x - y; });
    var bestStreak = 1;
    var bestElem = a[0];
    var currentStreak = 1;
    var currentElem = a[0];
    for (var i = 1; i < a.length; i++) {
        if (a[i - 1] !== a[i]) {
            if (currentStreak > bestStreak) {
                bestStreak = currentStreak;
                bestElem = currentElem;
            }
            currentStreak = 0;
            currentElem = a[i];
        }
        currentStreak++;
    }
    return currentStreak > bestStreak ? currentElem : bestElem;
};
function prob3(lines) {
    var arr = lines[1].split(" ").map(Number);
    var modeElem = mode(arr);
    var modeCount = arr.filter(function (e) { return e === modeElem; }).length;
    var freshArr = [];
    arr.forEach(function (e) {
        if (!freshArr.includes(e)) {
            freshArr.push(e);
        }
    });
    console.log(modeCount, freshArr.length);
}
var rl = readline.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) { return input.push(line); }).on("close", function () {
    prob3(input);
});
