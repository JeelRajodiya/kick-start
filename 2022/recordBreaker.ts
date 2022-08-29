// a girl is given number of visitors at her store on N Days
// number of visitors on i-th day is V(i)
// A day is record breaking if it satisfies both of the following conditions:
// Either it is the first day, or the number of visitors on the day is strictly larger than the number of visitors on each of the previous days.
// Either it is the last day, or the number of visitors on the day is strictly larger than the number of visitors on the following day.

// find the number of record breaking days
// first line gives T = total no. of test cases
// test line 1 => N (total days)
// test line 2 => V(i) (total no of visitors on i-th day)
// output: Case #x: y, where x is the test case number (starting from 1) and y is the number of record breaking days.

// sample input
// 4
// 8
// 1 2 0 7 2 0 2 0
// 6
// 4 8 15 16 23 42
// 9
// 3 1 4 1 5 9 2 6 5
// 6
// 9 9 9 9 9 9

// Sample Output
// Case #1: 2
// Case #2: 1
// Case #3: 3
// Case #4: 0

declare var require: any;
declare var process: any;

const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);
