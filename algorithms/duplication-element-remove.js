// 중복된 요소가 있다면 첫 번째로 검색된 요소의 인덱스를 반환하는 indexOf의 특징을 활용함

const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

const result = values.reduce(
  (unique, val, i, _values) =>
    _values.indexOf(val) === i ? [...unique, val] : unique,
  []
);

console.log(result);
