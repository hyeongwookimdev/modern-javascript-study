const user = {
  name: "Daegil",
  id: 1,
  level: 9,
  cute: true,
  favorite: ["snack", "doll"],
};

const json = JSON.stringify(user);
console.log(json);
// {"name":"Daegil","id":1,"level":9,"cute":true,"favorite":["snack","doll"]}

const prettyJson = JSON.stringify(user, null, 2);
console.log(prettyJson);
/*
{
  "name": "Daegil",
  "id": 1,
  "level": 9,
  "cute": true,
  "favorite": [
    "snack",
    "doll"
  ]
}
*/

function filter(key, value) {
  return typeof value === "number" ? undefined : value;
}

const filteredJson = JSON.stringify(user, filter, 2);
console.log(filteredJson);

/*
{
  "name": "Daegil",
  "cute": true,
  "favorite": [
    "snack",
    "doll"
  ]
}
*/

const users = [
  { name: "Daegil", id: 1, dog: true },
  { name: "Bom", id: 2, dog: true },
  { name: "Taesan", id: 3, dog: false },
];

const usersJson = JSON.stringify(users, null, 2);
console.log(usersJson);

/*
[
  {
    "name": "Daegil",
    "id": 1,
    "dog": true
  },
  {
    "name": "Bom",
    "id": 2,
    "dog": true
  },
  {
    "name": "Taesan",
    "id": 3,
    "dog": false
  }
]
*/
