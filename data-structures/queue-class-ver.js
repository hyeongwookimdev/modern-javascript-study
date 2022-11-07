/*
큐(queue)는 데이터를 마지막에 밀어 넣고, 처음 데이터, 
즉 가장 먼저 밀어 넣은 데이터를 먼저 꺼내는 선입 선출(FIFO - First In Last Out) 방식의 자료구조다.
스택은 언제나 마지막에 밀어 넣은 최신 데이터를 취득하지만 큐는 언제나 데이터를 밀어 넣은 순서대로 취득한다.
*/

class Queue {
  #array;
  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array}는 배열이 아닙니다.`);
    }
    this.#array = array;
  }
  enqueue(value) {
    return this.#array.push(value);
  }
  dequeue() {
    return this.#array.shift();
  }
  entries() {
    return [...this.#array];
  }
}

const queue = new Queue([1, 2]);
console.log(queue.entries()); // [ 1, 2 ]

queue.enqueue(3);
console.log(queue.entries()); // [ 1, 2, 3 ]

queue.dequeue();
console.log(queue.entries()); // [ 2, 3 ]
