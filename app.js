// 1
let a = prompt("son kiriting");

if (a > 0) {
    console.log("musbat.");
} else {
    console.log("manfiy");
}
//2
let a1 = +prompt("son kiriting");
console.log(a1 % 2 !== 0);

// 3
let a2 = +prompt("a son kiriting");
let b2 = +prompt("b son kiriting");
console.log(a2 > 2 && b2 <= 3);

// 4
let a3 = +prompt("a3 son kiriting");
let b3 = +prompt("b3 son kiriting");
let c1 = +prompt("c1 son kiriting");
console.log(a3 <= b3 && b3 <= C);

//5
let a4 = +prompt("a4 son kiriting");
let b4 = +prompt("b4 son kiriting");
console.log(a4 % 2 === b4 % 2);
//6
let a5 = +prompt("a5 son kiriting");
let b5 = +prompt("b5 son kiriting");
let c5 = +prompt("c5 son kiriting");
console.log(a5 > 0 || b5 > 0 || c5 > 0);
//7
let lost = prompt("Uch xonali sonni kiriting:");
console.log(lost[0] !== lost[1] && lost[0] !== lost[2] && lost[1] !== lost[2]);
//8
let a6 = +prompt("a6 son kiriting");
let b6 = +prompt("b6 son kiriting");
let c6 = +prompt("c6 son kiriting");
console.log(a6 === b6 || a6 === c6 || b6 === c6);
// 9
let x1 = +prompt("x1ni kiriting");
let y1 = +prompt("y1ni kiriting:");
let x2 = +prompt("x2ni kiriting:");
let y2 = +prompt("y2ni kiriting:");
console.log(x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2));
