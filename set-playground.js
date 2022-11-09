const set = new Set();
console.log(set); // Set(0) {}

set.add(1);
console.log(set); // Set(1) { 1 }

set.add(2).add(3).add(4);
console.log(set); // Set(4) { 1, 2, 3, 4 }

console.log(set.has(3)); // true

set.delete(4);
console.log(set); // Set(3) { 1, 2, 3 }

set.clear();
console.log(set); // Set(0) {}
