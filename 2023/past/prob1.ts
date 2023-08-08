/*
It's a walking tour day in SIS.Winter, so t
 groups of students are visiting Torzhok. Streets of Torzhok are so narrow that students have to go in a row one after another.

Initially, some students are angry. Let's describe a group of students by a string of capital letters "A" and "P":

"A" corresponds to an angry student
"P" corresponds to a patient student
Such string describes the row from the last to the first student.

Every minute every angry student throws a snowball at the next student. Formally, if an angry student corresponds to the character with index i
 in the string describing a group then they will throw a snowball at the student that corresponds to the character with index i+1
 (students are given from the last to the first student). If the target student was not angry yet, they become angry. Even if the first (the rightmost in the string) student is angry, they don't throw a snowball since there is no one in front of them.


Let's look at the first example test. The row initially looks like this: PPAP. Then, after a minute the only single angry student will throw a snowball at the student in front of them, and they also become angry: PPAA. After that, no more students will become angry.

Your task is to help SIS.Winter teachers to determine the last moment a student becomes angry for every group.

Input
The first line contains a single integer t
 — the number of groups of students (1≤t≤100
). The following 2t
 lines contain descriptions of groups of students.

The description of the group starts with an integer ki
 (1≤ki≤100
) — the number of students in the group, followed by a string si
, consisting of ki
 letters "A" and "P", which describes the i
-th group of students.

Output
For every group output single integer — the last moment a student becomes angry.
*/

const readline = require("readline");
function angryStudents(lines: string[]) {
	const testCases: number = Number(lines[0]);
	let line1: string;
	let line2: string;

}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line: string) => input.push(line)).on("close", () => {
	angryStudents(input);
});
