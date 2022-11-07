// 27.4.3 Array.of (배열 생성)
const arr = Array.of("potato", "tomato", "banana", "avocado");
console.log(arr); // [ 'potato', 'tomato', 'banana', 'avocado' ]

// 27.7 배열 요소의 삭제
arr.splice(1, 1);
console.log(arr); // [ 'potato', 'banana', 'avocado' ]

// 27.8.1 Array.isArray
console.log(Array.isArray(arr));

// 27.8.2 Array.prototype.indexOf
const arr2 = [1, 2, 2, 3];

// 원본 배열에 인수로 전달한 요소와 중복되는 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스를 반환한다.
console.log(arr2.indexOf(2)); // -> 1

// 원본 배열에 인수로 전달한 요소가 존재하지 않으면 -1을 반환한다.
console.log(arr2.indexOf(4)); // -> -1

// 두 번째 인수는 검색을 시작할 인덱스다. 두 번째 인수를 생략하면 처음부터 검색한다.
console.log(arr2.indexOf(2, 2)); // -> 2

// index.Of 메서드는 배열에 특정 요소가 존재하는지 확인할 때 유용하다(includes 메서드를 사용하면 가독성이 더 좋다)
if (arr.indexOf("tomato") === -1) {
  arr.push("tomato");
}
console.log(arr);

// 27.8.3 Array.prototype.push (스프레드 문법 사용 권장)
let resultPush = arr.push("apple");
console.log(arr); // [ 'potato', 'banana', 'avocado', 'tomato', 'apple' ]
console.log(resultPush); // -> 5

// 27.8.4 Array.prototype.pop
let resultPop = arr.pop();
console.log(arr); // [ 'potato', 'banana', 'avocado', 'tomato' ]
console.log(resultPop); // -> apple

// 27.8.5 Array.prototype.unshift (스프레드 문법 사용 권장)
let resultUnshift = arr.unshift("apple", "orange");
console.log(arr); // [ 'apple', 'orange', 'potato', 'banana', 'avocado', 'tomato' ]
console.log(resultUnshift); // 6 (변경된 length 프로퍼티 반환)

// 27.8.6 Array.prototype.shift
let resultShift = arr.shift();
console.log(arr); // [ 'orange', 'potato', 'banana', 'avocado', 'tomato' ]
console.log(resultShift); // apple (첫 번째 요소 제거 후, 제거한 요소 반환)
