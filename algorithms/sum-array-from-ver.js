function sum() {
  const arr = Array.from(arguments);

  return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3)); // 6
