// 25.5.4 정적 메서드와 프로토타입 메서드의 차이
// 정적 메서드 만들어 보기

class myMetod {
  static add(num1, num2) {
    return num1 + num2;
  }
  static subtract(num1, num2) {
    return num1 - num2;
  }
  static multiply(num1, num2) {
    return num1 * num2;
  }
  static devide(num1, num2) {
    return num1 / num2;
  }
}

console.log(myMetod.add(4, 2));
console.log(myMetod.subtract(4, 2));
console.log(myMetod.multiply(4, 2));
console.log(myMetod.devide(4, 2));
