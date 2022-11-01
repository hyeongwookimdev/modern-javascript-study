function Square(num) {
  this.num = num;
}

Square.prototype.add = function () {
  return console.log(this.num ** 2);
};

const square2 = new Square(2);
square2.add(); // 4
const square5 = new Square(5);
square5.add(); // 25
