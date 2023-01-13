"use strict";
/*
1≤N≤10
18
 
(N+Y) is divisible by X.
(N+X) is divisible by Y.


Input
3
18 42
1 1
100 200

Output
192
5
500

N+Y % X === 0
N+X % Y === 0

N+Y / X = i
N + Y = Xi
N = Xi - Y


N+X / Y = j
N+X / Y = j
N+X = Yj
N = Yj -X

Xi - Y = Yj - X

X(i+1) = Y(j + 1)



*/
exports.__esModule = true;
var readline_1 = require("readline");
function findAnInt(lines) {
	var testCases = Number(lines[0]);
	var X;
	var Y;
	var answer;
	var line1;
	for (var i = 1; i <= testCases; i++) {
		line1 = lines[i];
		X = Number(line1.split(" ")[0]);
		Y = Number(line1.split(" ")[1]);
		answer = X * Y - X - Y;
		// print(x*y - x - y) if x*y - x - y > 0 else print(5*x*y - x - y)
		if (answer > 0) {
			console.log(answer);
		} else {
			console.log(3 * answer);
		}
	}
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	findAnInt(input);
});
