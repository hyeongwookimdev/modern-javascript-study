class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    return this.a + this.b;
  }
}

class Derived extends Base {
  constructor(a, b, c) {
    super(a, b);
    this.c = c;
  }
  add() {
    return super.add() + this.c;
  }
}

const derived = new Derived(8, 2, 10);
console.log(derived.add());
