/*
스택(stack)은 데이터를 마지막에 밀어 넣고, 
마지막에 밀어 넣은 데이터를 먼재 꺼내는 후입 선출(LIFO - Last In First Out) 방식의 자료구조다.
스택은 언제나 가장 마지막에 밀어 넣은 최신 데이터를 먼저 취득한다.
스택에 데이터를 밀어 넣는 것을 푸시(push)라 하고 스택에서 데이터를 꺼내는 것을 팝(pop)이라고 한다.
*/

const Stack = (function () {
  function Stack(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array}는 배열이 아닙니다.`);
    }
    this.array = array;
  }
  Stack.prototype = {
    constructor: Stack,
    push(value) {
      return this.array.push(value);
    },
    pop() {
      return this.array.pop();
    },
    entries() {
      return [...this.array];
    },
  };
  return Stack;
})();

const stack = new Stack([1, 2]);
console.log(stack.entries());

stack.push(3);
console.log(stack.entries());

stack.pop();
console.log(stack.entries());
