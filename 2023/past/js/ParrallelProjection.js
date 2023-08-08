"use strict";
/*
Vika's house has a room in a shape of a rectangular parallelepiped (also known as a rectangular cuboid). Its floor is a rectangle of size w×d
, and the ceiling is right above at the constant height of h
. Let's introduce a coordinate system on the floor so that its corners are at points (0,0)
, (w,0)
, (w,d)
, and (0,d)
.

A laptop is standing on the floor at point (a,b)
. A projector is hanging on the ceiling right above point (f,g)
. Vika wants to connect the laptop and the projector with a cable in such a way that the cable always goes along the walls, ceiling, or floor (i. e. does not go inside the cuboid). Additionally, the cable should always run parallel to one of the cuboid's edges (i. e. it can not go diagonally).

What is the minimum length of a cable that can connect the laptop to the projector?

Illustration for the first test case. One of the optimal ways to put the cable is shown in green.
Input
Each test contains multiple test cases. The first line contains the number of test cases t
 (1≤t≤104
). The description of the test cases follows.

The first line of each test case contains three integers w
, d
, and h
 (2≤w,d,h≤1000
) — the size of the room.

The second line contains four integers a
, b
, f
, g
 (0<a,f<w
; 0<b,g<d
): the laptop is located on the floor at point (a,b)
, while the projector is hanging on the ceiling right above point (f,g)
.

Output
For each test case, print a single integer — the minimum length of the cable connecting the laptop and the projector that runs only along the walls, floor, and ceiling parallel to cuboid's edges.

Input:
5
55 20 29
23 10 18 3
20 10 5
1 5 2 5
15 15 4
7 13 10 10
2 1000 2
1 1 1 999
10 4 10
7 1 2 1

Output:
47
8
14
1002
17


// minDistance = height + (|a-f|) + (min(|d-b|,|w-b|)) )
*/
exports.__esModule = true;
var readline_1 = require("readline");
function distanceFromOrigin(x, y) {
	return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
function parallelProjection(lines) {
	var testCases = Number(lines[0]);
	var line1;
	var line2;
	var w, d, h;
	var a, b, f, g;
	var abDistance;
	var fgDistance;
	var minDistance;
	for (var i = 1; i <= testCases * 2; i++) {
		line1 = lines[i];
		line2 = lines[++i];
		minDistance = 0;
		w = Number(line1.split(" ")[0]);
		d = Number(line1.split(" ")[1]);
		h = Number(line1.split(" ")[2]);
		a = Number(line2.split(" ")[0]);
		b = Number(line2.split(" ")[1]);
		f = Number(line2.split(" ")[2]);
		g = Number(line2.split(" ")[3]);
		abDistance = distanceFromOrigin(a, b);
		fgDistance = distanceFromOrigin(f, g);
		if (abDistance > fgDistance) {
			minDistance += Math.min(f, g, Math.abs(d - a), Math.abs(w - b)) * 2;
		} else {
			minDistance += Math.min(a, b, Math.abs(d - f), Math.abs(w - g)) * 2;
		}
		minDistance += h + Math.abs(a - f) + Math.abs(b - g);
		// Math.min(Math.abs(w - b), b) +
		// Math.min(Math.abs(d - f), f);
		// Math.min(Math.abs(d - b), b) +
		// Math.min(Math.abs(w - f), f);
		console.log(minDistance);
	}
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	parallelProjection(input);
});
