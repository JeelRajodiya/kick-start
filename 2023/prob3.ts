const readline = require("readline");
// @ts-ignore
var mode = (a) => {
	// @ts-ignore
	a = a.slice().sort((x, y) => x - y);

	var bestStreak = 1;
	var bestElem = a[0];
	var currentStreak = 1;
	var currentElem = a[0];

	for (let i = 1; i < a.length; i++) {
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

function prob3(lines: string[]) {
	const arr = lines[1].split(" ").map(Number);
	const modeElem = mode(arr);
	const modeCount = arr.filter((e) => e === modeElem).length;
	const freshArr: number[] = [];
	arr.forEach((e) => {
		if (!freshArr.includes(e)) {
			freshArr.push(e);
		}
	});
	console.log(modeCount, freshArr.length);
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line: string) => input.push(line)).on("close", () => {
	prob3(input);
});
