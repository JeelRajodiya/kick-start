import readline from "readline";

function doOrinString(str1: string, str2: string): string {
	let result = "";
	for (let i = 0; i < str1.length; i++) {
		result += String(Number(Number(str1[i]) | Number(str2[i])));
	}
	return result;
}

function stringSimilarity(lines: string[]) {
	const testCases: number = Number(lines[0]);
	let n: number;
	let binString: string;
	let listOfAllBinStrings: string[] = [];
	for (let i = 1; i <= testCases * 2; i++) {
		n = Number(lines[i]);
		binString = lines[++i];
		listOfAllBinStrings = [];
		// let distance = n-1
		for (let j = 0; j + n <= 2 * n - 1; j++) {
			listOfAllBinStrings.push(binString.slice(j, j + n));
		}
		console.log(listOfAllBinStrings.reduce((a, b) => doOrinString(a, b)));
	}
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	stringSimilarity(input);
});
/*
4
1
1
3
00000
4
1110000
2
101

*/
