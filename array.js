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

// 27.8.7 Array.prototype.concat (스프레드 문법 사용 권장)
const arr3 = ["apple", "mango"];
let resultConcat = arr.concat(arr3);
// 인수를 원본 배열의 마지막 요소로 추가후 새로운 배열을 반환
console.log(resultConcat); // ['orange', 'potato', 'banana', 'avocado', 'tomato', 'apple', 'mango']

// 27.8.8 Array.prototype.splice
// splice(a, b, c,...)
// a: 원본 배열의 요소를 제거하기 시작할 인덱스
// b: a부터 제거할 요소의 개수 (옵션)
// c: 제거한 위치에 삽입할 요소들의 목록 (옵션)
console.log(arr); // [ 'orange', 'potato', 'banana', 'avocado', 'tomato' ]
arr.splice(-1);
console.log(arr); // [ 'orange', 'potato', 'banana', 'avocado' ]
arr.splice(0, 1, "tomato");
console.log(arr); // [ 'tomato', 'potato', 'banana', 'avocado' ]
arr.splice(2, 1);
console.log(arr); // [ 'tomato', 'potato', 'avocado' ]

// 27.8.9 Array.prototype.slice
console.log(arr); // [ 'tomato', 'potato', 'avocado' ]
console.log(arr.slice(0, 2)); // [ 'tomato', 'potato' ]
console.log(arr); // [ 'tomato', 'potato', 'avocado' ]

// 27.8.10 Array.prototype.join
console.log(arr); // [ 'tomato', 'potato', 'avocado' ]
console.log(arr.join()); // tomato,potato,avocado
console.log(arr.join("")); // tomatopotatoavocado
console.log(arr.join(":")); // tomato:potato:avocado
console.log(arr); // [ 'tomato', 'potato', 'avocado' ] (원본 유지)

// 27.8.11 Array.prototype.reverse
console.log(arr); // [ 'tomato', 'potato', 'avocado' ]
console.log(arr.reverse()); // [ 'avocado', 'potato', 'tomato' ]
console.log(arr); // [ 'avocado', 'potato', 'tomato' ] (원본 변경)

// 27.8.12 Array.prototype.fill
console.log(arr); // [ 'avocado', 'potato', 'tomato' ]
arr.fill("Boom!", 0, 1);
console.log(arr); // [ 'Boom!', 'potato', 'tomato' ]
arr.fill("Boom!", 0, 2);
console.log(arr); // [ 'Boom!', 'Boom!', 'tomato' ]
arr.fill("Boom!");
console.log(arr); // [ 'Boom!', 'Boom!', 'Boom!' ]

// 27.8.13 Array.prototype.includes()
arr.splice(0, arr.length, "tomato", "potato", "avocado");
console.log(arr); // [ 'tomato', 'potato', 'avocado' ]
console.log(arr.includes("tomato")); // true
console.log(arr.includes("banana")); // false
console.log(arr.includes("tomato", 1)); // false
console.log(arr.includes("avocado", -1)); // true (arr.length - 1부터 확인 한다는 뜻)

// 27.8.14 Array.prototype.flat()
const arr4 = [1, [2, [3, [4]]]];
console.log(arr4.flat()); // [ 1, 2, [ 3, [ 4 ] ] ]
console.log(arr4.flat(2)); // [ 1, 2, 3, [ 4 ] ]
console.log(arr4.flat(3)); // [ 1, 2, 3, 4 ]
console.log(arr4.flat(Infinity)); // [ 1, 2, 3, 4 ]

// 27.9.1 Array.prototype.sort
arr.splice(0, arr.length, "butter", "cocoa", "apple");
console.log(arr); // [ 'butter', 'cocoa', 'apple' ]
arr.sort();
console.log(arr); // [ 'apple', 'butter', 'cocoa' ]

const arr5 = [40, 100, 1, 5, 2, 25, 10];
arr5.sort((a, b) => a - b);
console.log(arr5);
arr5.sort((a, b) => b - a);
console.log(arr5);
