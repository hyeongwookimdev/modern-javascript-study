// array.from 활용
function sum() {
  const arr = Array.from(arguments);

  return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3)); // 6

// 스프레드 문법 활용
function sum2() {
  const arr = [...arguments];

  return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum2(1, 2, 3)); // 6
