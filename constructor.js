function square(num) {
  this.num = num;
  this.getSquare = function () {
    return num ** 2;
  };
}

const square2 = new square(2);
const square3 = new square(3);

console.log(square2.getSquare()); // 4
console.log(square3.getSquare()); // 9
