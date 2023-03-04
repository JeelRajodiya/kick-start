// hint: the second row of characters doesnt matter
/*
Once upon a time, after getting bored of the constant battles, Pekka decided to start farming in the village's corner. For that the builder gave him a space of 9 squares in the form of a 3X3
 matrix where he can grow veggies of his liking.

Out of the 9 squares he is given some of the square are very infertile so he can't grow any veggie on that square piece of land. Now Pekka likes symmetry very much and he will be really very happy if he can grow his veggies in the symmetry (Here by symmetry we mean symmetric with respect to the central sqaure piece of the given land i.e. of 3X3
 matrix).

Input
Input contains the matrix of three rows of three symbols each. Symbol «X» means that the square piece of land is fertile, and «.» means that the square piece of land is infertile. The matrix may contain no «X»(In this case the answer should be "YES" as pekka will be happy because of the symmetry), also it may contain no «.».

Output
Print YES if pekka's farm will be symmetric with respect to the central square of the field and NO otherwise.

XX.
...
.XX


X..
X.X
..X
*/
import readline from "readline";

function pakkasFarm(lines: string[]) {
	const row1 = lines[0];
	const row2 = lines[1];
	const row3 = lines[2];
	const row3Reversed = row3.split("").reverse().join("");
	if (row1 === row3Reversed && row2[0] === row2[2]) {
		console.log("YES");
		return;
	}
	console.log("NO");
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	pakkasFarm(input);
});
