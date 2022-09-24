/*
Problem
Chef has 2 numbers A and B (A<B).
Chef will perform some operations on A.
In the i th operation:
Chef will add 1 to A if i is odd.
Chef will add 2 to A if i is even.
Chef can stop at any instant. Can Chef make A equal to B?
Input Format
● The first line contains a single integer T the number of test cases. Then the test cases
follow.
● The first and only line of each test case contains two space separated integers A and B.
Output Format
For each test case, output YES if Chef can make A and B equal, NO otherwise.
Note that the checker is case-insensitive. So, YES, Yes, yEs are all considered same.
Sample 1:
Input       
4       
3 6     
1 2     
4 9     
10 20       
Output:     
YES     
YES     
NO      
YES     

*/

/*
 A < B  
 
 3-6=3   => Yes    
 1-2=1 => Yes 
 3-9=6  => Yes
 1-12=11 => No
 4-9=5  => No   
 10-20=10 => Yes   
 2-12=10  => Yes  
 1-11=10  => Yes

 Conclusion: |A-B| % A === 0 then Yes
 
*/

function makeThemEqual(input: string[]) {
	let pointer = 0;
	const tests: number = Number(input[pointer++]);

	let l: string[];
	let A: number;
	let B: number;
	for (; pointer <= tests; pointer++) {
		l = input[pointer].split(" ");
		A = Number(l[0]);
		B = Number(l[1]);
		if ((B - A) % A === 0) {
			console.log("Yes");
		} else {
			console.log("No");
		}
	}
}
import readline from "readline";
let rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () =>
	makeThemEqual(input)
);
