"use strict";
/*
Impressed by the mights of barbarians and goblins in the battle, the Giant decided to give them some gems. The gems are distributed in bags. However the giant doesn't want the barbarians and goblins to fight because of nothing when they distribute the gems. That's why Giant wants to steal a bag of gems so that the number of gems in the remaining bags stay even, that is, so that barbarians and goblins could evenly divide it into two ( it is ok if none of them gets any gems).

How many ways there are to steal exactly one gem bag so that the total number of gems in the remaining bags stay even?

Input
The first line contains the only integer n
 (1≤n≤100
) — the number of gems bags The Giant have. The second line contains n
 integers ai
 (1≤ai≤100
) — the number of gems in the i
-th bag.

Output
Print in the only line the only number — the sought number of ways. If there are no such ways print 0.
*/
exports.__esModule = true;
var readline_1 = require("readline");
function sumArray(arr) {
	return arr.reduce(function (acc, curr) {
		return acc + curr;
	}, 0);
}
function popNth(arr, n) {
	return arr.filter(function (_, i) {
		return i !== n;
	});
}
function equalGems(lines) {
	var line2 = lines[1].split(" ").map(function (x) {
		return parseInt(x);
	});
	var totalWays = 0;
	for (var i = 0; i < line2.length; i++) {
		var sum = sumArray(popNth(line2, i));
		if (sum % 2 === 0) {
			totalWays++;
		}
	}
	console.log(totalWays);
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	equalGems(input);
});
