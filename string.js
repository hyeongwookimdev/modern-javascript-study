// 32.3.1 String.prototype.indexOf
const str = "Hello World";
console.log(str.indexOf("l")); // 2
console.log(str.indexOf("x")); // -1

// 32.3.2 String.prototype.search
console.log(str.search(/o/)); // 4
console.log(str.search(/x/)); // -1

// 32.3.3 String.prototype.include
console.log(str.includes("Hello")); // true
console.log(str.includes("H")); // true
console.log(str.includes("H", 0)); // true
console.log(str.includes("H", 1)); // false

// 32.3.4 String.prototype.startsWith
console.log(str.startsWith("He")); // true
console.log(str.startsWith("W", 6)); // true

// 32.3.5 String.prototype.endsWith
console.log(str.endsWith("ld")); // true
console.log(str.endsWith("lo", 5)); // true

// 32.3.6 String.prototype.charAt
const str2 = "Hello";

for (let i = 0; i < str2.length; i++) {
  console.log(str2.charAt(i)); // "H e l l o"
}

// 32.3.7 String.prototype.substring
const str3 = "xxxxxI'm Here!xxxxx";
const gotya = str3.substring(str3.indexOf("I"), str3.indexOf("!") + 1);
console.log(gotya); // "I'm Here!"

// 32.3.8 String.prototype.slice
const str4 = "~~~~~~~~~~~Hi!";
console.log(str4.slice(-3)); // "Hi!"

// 32.3.9 String.prototype.toUpperCase
const str5 = "upper!";
console.log(str5.toUpperCase()); // "UPPER!"

// 32.3.10 String.prototype.toLocaleLowerCase
const str6 = "LOWER...";
console.log(str6.toLocaleLowerCase()); // "lower..."

// 32.3.11 String.prototype.trim
const str7 = "       oops!         ";
console.log(str7.trim()); // "oops!"

// 32.3.12 String.prototype.repeat
const star = "-****";
const myCardNum = `1234${star.repeat(3)}`;
console.log(myCardNum); // "1234-****-****-****"

// 32.3.13 String.prototype.replace
const myName = "Hello, my name is Hyuwoo";
console.log(myName.replace("Hyuwoo", "Taesan")); // Hello, my name is Taesan
