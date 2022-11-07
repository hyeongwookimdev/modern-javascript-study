const users = [
  { id: 3, name: "Daegil" },
  { id: 1, name: "Bom" },
  { id: 2, name: "Taesan" },
];

function compare(key) {
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}

users.sort(compare("id"));
console.log(users);
/*
[
  { id: 1, name: 'Bom' },
  { id: 2, name: 'Taesan' },
  { id: 3, name: 'Daegil' }
]
*/
users.sort(compare("name"));
console.log(users);
/*
[
  { id: 1, name: 'Bom' },
  { id: 3, name: 'Daegil' },
  { id: 2, name: 'Taesan' }
]
*/
