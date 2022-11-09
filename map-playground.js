const map = new Map();
console.log(map); // Map(0) {}

map.set("key1", "value1");
console.log(map); // Map(1) { 'key1' => 'value1' }

map.set("key2", "value2").set("key3", "value3");
console.log(map); // Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }

console.log(map.size); // 3

const user1 = { name: "Daegil" };
const user2 = { name: "Bom" };
map.set(user1, "first");
map.set(user2, "second");
console.log(map);
/*
Map(5) {
  'key1' => 'value1',
  'key2' => 'value2',
  'key3' => 'value3',
  { name: 'Daegil' } => 'first',
  { name: 'Bom' } => 'second'
}
*/
console.log(map.get("key1")); // value1
console.log(map.get(user1)); // first

map.delete(user1);
map.delete("key3");
console.log(map);
/*
Map(3) {
  'key1' => 'value1',
  'key2' => 'value2',
  { name: 'Bom' } => 'second'
}
*/

map.clear();
console.log(map); // Map(0) {}
