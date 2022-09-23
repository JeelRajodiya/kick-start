/*
Problem
N candidates (numbered from 1 to N) join Chef's firm. The first 5 candidates join on the first day,
and then, on every subsequent day, the next 5 candidates join in.
For example, if there are 12 candidates, candidates numbered 1 to 5 will join on day 1,
candidates numbered 6 to 10 on day 2 and the remaining 2 candidates will join on day 3.
Candidate numbered K decided to turn down his offer and thus, Chef adjusts the position by
shifting up all the higher numbered candidates. This leads to a change in the joining day of
some of the candidates.
Help Chef determine the number of candidates who will join on a different day than expected.
Input Format
First line will contain T, number of test cases. Then the test cases follow.
Each test case contains of a single line of input, two space-separated integers NN and KK
denoting the number of candidates and the candidate who turned down the offer.
Output Format
For each test case, output a single integer denoting the number of candidates whose joining day
will be changed.
,
Sample 1:
Input
4
7 3 (total , candidate number who is not joining)
6 6
2 1
14 2
Output
1
0
0
2
Explanation:
Test case 1: The original joining day of each candidate is given as [1, 1, 1, 1, 1, 2, 2] but as
candidate 3 turns down his offer, the new joining days are now [1, 1, NA, 1, 1, 1, 2]. Candidate
numbered 66 is the only one to have his joining day changed.
Test case 2: The original joining day of each candidate is given as [1, 1, 1, 1, 1, 2] but as
candidate 6 turns down his offer, the new joining days are now [1, 1, 1, 1, 1, NA]. No candidate
got his joining day changed.
Test case 3: The original joining day of each candidate is given as [1,1] but as candidate 1 turns
down his offer, the new joining days are now [NA,1]. No candidate got his joining day changed.
Test case 4: The original joining day of each candidate is given as [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3,
3, 3, 3] but as candidate 22 turns down his offer, the new joining days are now [1, NA, 1, 1, 1, 1,
2, 2, 2, 2, 2, 3, 3, 3]]. Candidate numbered 6 and 11 are the only ones to have their joining days
changed.
*/

/*
one day: 5 candidates 
for test 1:
    N = 7
    C = 3
    = [[1,1,1,1,1],[2,2]] => [[1,1,NA,1,1],2,2] => [[1,1,1,1,1],[2]]
    = [[1,1,NA,1,1],[2,2]] 
    = [[1,1,1,1,1],[2]]
                   ^^^ count the total arrays after the removed elements

*/

const ipt = `4
7 3 
6 6
2 1
14 2
`;
import readline from "readline";
function calcBlocks(n: number): number {
	return Math.ceil(n / 5);
}

function calcDateChange(input: string[]) {
	// const lines: string[] = input.split("\n");
	let pointer = 0;
	const tests: number = Number(input[pointer++]);
	let totalCandidates: number;
	let turnedDownIndex: number; // index of that candidate
	let totalBlocks: number;
	let turnedDownFromBlock: number;
	let changedDatesOf: number;
	let l: string[];
	for (; pointer <= tests; pointer++) {
		l = input[pointer].split(" ");
		totalCandidates = Number(l[0]);
		turnedDownIndex = Number(l[1]);
		totalBlocks = calcBlocks(totalCandidates);
		turnedDownFromBlock = calcBlocks(turnedDownIndex);
		changedDatesOf = totalBlocks - turnedDownFromBlock;
		console.log(changedDatesOf);
	}
}

let rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () =>
	calcDateChange(input)
);
