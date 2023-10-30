let a = [1, 5, 7, 9, 10];
let b = [2, 3, 5, 7 ,7];
let intersection = [];

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
       // if (a[i] === b[j]) {
            if (b.includes(a[i]) && !intersection.includes(a[i])){
            intersection.push(a[i]);
            break; 
        }
    }
}
var s = intersection.join("    ")
console.log(s);
