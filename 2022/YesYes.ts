import readline from "readline";
/*
YesYesYes
Y
e
s
*/
interface Map {
	[key: string]: string;
}
const yesMap: Map = {
	Y: "e",
	e: "s",
	s: "Y",
};
function isValidSubString(s: string): boolean {
	if (s === "Y" || s === "e" || s === "s") {
		return true;
	}
	return false;
}
function findYesSubString(lines: string[]) {
	const testCases: number = Number(lines[0]);
	let mainString: string;

	let isPartOfYes: boolean;
	for (let i = 1; i <= testCases; i++) {
		isPartOfYes = false;
		mainString = lines[i]; // YesYe
		let char: string;
		// mainString = mainString.replace("Yes", "");
		for (let j = 0; j < mainString.length; j++) {
			char = mainString[j];
			if (mainString.length === 1 && isValidSubString(char)) {
				isPartOfYes = true;
				break;
			}
			if (mainString.length === j + 1) {
				break;
			}
			// console.log(i, mainString, yesMap[char], mainString[j + 1], char);
			if (isValidSubString(char) && yesMap[char] === mainString[j + 1]) {
				isPartOfYes = true;
			} else {
				isPartOfYes = false;
				break;
			}
		}
		if (isPartOfYes) {
			console.log("YES");
		} else {
			console.log("NO");
		}
	}
}
let rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () =>
	findYesSubString(input)
);
let a = "s";
// test branch
