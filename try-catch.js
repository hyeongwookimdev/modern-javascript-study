const repeat = (n, f) => {
  if (typeof f !== "function") throw new TypeError("f는 함수가 아닙니다.");
  for (var i = 0; i < n; i++) {
    f(i);
  }
};

try {
  repeat(2, 1);
} catch (err) {
  console.error(err);
}
