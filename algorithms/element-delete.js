// 배열에서 특정 요소 삭제 알고리즘

// 1. 요소가 중복된 경우 첫 번째 요소만 제거하는 경우

const arr = [1, 2, 3, 1, 2];

function remove(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
  return array;
}

console.log(remove(arr, 2)); // [ 1, 3, 1, 2 ]
console.log(remove(arr, 1)); // [ 3, 1, 2 ]

// 2. 요소가 중복된 경우 모두 제거하는 경우
const arr2 = [1, 2, 3, 1, 2];

function removeAll(array, item) {
  return array.filter((v) => v !== item);
}

console.log(removeAll(arr2, 2)); // [ 1, 3, 1 ]
