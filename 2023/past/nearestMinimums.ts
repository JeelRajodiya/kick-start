import readline from "readline";
function nearestMinimums(lines: string[]) {
	const n: number = Number(lines[0]);
	const arr: number[] = lines[1].split(" ").map(Number);
	const min = Math.min(...arr);
	const minIndexes: number[] = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === min) {
			minIndexes.push(i);
		}
	}
	let minDistance = Infinity;
	for (let i = 0; i < minIndexes.length - 1; i++) {
		const distance = minIndexes[i + 1] - minIndexes[i];
		if (distance < minDistance) {
			minDistance = distance;
		}
	}
	console.log(minDistance);
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	nearestMinimums(input);
});
