// 17.2.2 생성자 함수에 의한 객체 생성 방식의 장점
// 17.2.7 new.target

function Square(num) {
  if (!new.target) {
    return new Square(num);
  }
  this.num = num;
  this.getSquare = function () {
    return num ** 2;
  };
}

const square2 = new Square(2);
const square3 = new Square(3);
const square5 = Square(5);

console.log(square2.getSquare()); // 4
console.log(square3.getSquare()); // 9
console.log(square5.getSquare()); // 25
