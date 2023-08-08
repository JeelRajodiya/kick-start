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

import readline from "readline";

function sumArray(arr: number[]) {
	return arr.reduce((acc, curr) => acc + curr, 0);
}

function popNth(arr: number[], n: number) {
	return arr.filter((_, i) => i !== n);
}

function equalGems(lines: string[]) {
	const line2 = lines[1].split(" ").map((x) => parseInt(x));
	let totalWays = 0;
	for (let i = 0; i < line2.length; i++) {
		const sum = sumArray(popNth(line2, i));
		if (sum % 2 === 0) {
			totalWays++;
		}
	}
	console.log(totalWays);
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	equalGems(input);
});
