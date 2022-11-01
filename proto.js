const parent = { x: 10 };

const child = {
  y: 20,
  __proto__: parent,
};

console.log(child.x, child.y);
console.log(Object.getPrototypeOf(child) === parent);
