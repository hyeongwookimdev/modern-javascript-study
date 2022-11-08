const users = [
  { id: 1, name: "Kim" },
  { id: 2, name: "Lee" },
  { id: 2, name: "Choi" },
  { id: 3, name: "Park" },
];

function predicate(key, value) {
  return (item) => item[key] === value;
}

console.log(users.findIndex(predicate("id", 2))); // 1
console.log(users.findIndex(predicate("name", "Choi"))); // 2
