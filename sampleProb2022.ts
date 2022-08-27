import readline from "readline";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

// N candy
// M students
// i th bag has C(i) candy
// every kid has to recive same and maximum amount of candy
// open each bag and mix all pieces
// how many pieces of candy will remain after

// input => 1st line: test cases
//       => 2nd line: N , M
//       => 3rd line: C1,C2,C3...Cn
