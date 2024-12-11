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
 // Arifmetik masalalar

 // 1
 let a7 = +prompt("a ni kiriting");
let b7 = +prompt("b ni kiriting");
let s = a * b;
let p = 2 * (a + b);
console.log("Yuza:", s, "Perimetr:", p);
//2
let d = +prompt("Diametrni kiriting:");
const π = 3.14;
let r = d / 2;
let l = π * d;
let s1 = π * r ** 2;
console.log("Uzunlik", l, "Yuza", s1);
//3
let a7 = +prompt("Kubning tomonini kiriting");
let v = a ** 3;
let s2 = 6 * a ** 2;
console.log("Hajm:", v, "sirt:", s2);
//4
let a8 = +prompt("a8 ni kiriting:");
let b8 = +prompt("b8 ni kiriting:");
let c8 = +prompt("c8 ni kiriting:");
let v2 = a8 * b8 * c8;
let s3 = 2 * (a8 * b8 + b8 * c8 + a8 * c8);
console.log("Hajm:", v2, "To‘la sirt:", s3);
//5
let a9 = +prompt("a9 ni kiriting:");
let b9 = +prompt("b9 ni kiriting:");
let m9 = (a9 + b9) / 2;
console.log("Orta arifmetik:", m9);
//6
let a10 = +prompt("Katet a ni kiriting:");
let b10 = +prompt("Katet b ni kiriting:");
let c10 = Math.sqrt(a ** 2 + b ** 2);
let P10 = a10 + b10 + c10;
console.log("Gipotenuza:", c, "Perimetr:", P);
//7
let r1 = +prompt("r1 ni kiriting:");
let r2 = +prompt("r2 ni kiriting:");
const π = 3.14;
let S1 = π * r1 ** 2;
let S2 = π * r2 ** 2;
let S = π * (r1 ** 2 - r2 ** 2);
console.log("S1:", S1, "S2:", S2, "Ayirma:", S);
//8
let L = +prompt("Aylananing uzunligini kiriting:");
const π = 3.14;
let R = L / (2 * π);
let S = π * R ** 2;
console.log("Radius:", R, "Yuza:", S);
//9
let x1 = +prompt("x1 ni kiriting:");
let y1 = +prompt("y1 ni kiriting:");
let x2 = +prompt("x2 ni kiriting:");
let y2 = +prompt("y2 ni kiriting:");
let L = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
console.log("Masofa:", L);
//10
let A = +prompt("A ni kiriting:");
let B = +prompt("B ni kiriting:");
let C = +prompt("C ni kiriting:");
let temp = A;
A = B;
B = C;
C = temp;
console.log("Yangi qiymatlar -> A:", A, "B:", B, "C:", C);
