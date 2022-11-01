// 18.2.1 arguments 프로퍼티

function toDos() {
  let arr = [];

  for (let i = 0; i < arguments.length; i++) {
    arr[i] = arguments[i];
  }

  return arr;
}

console.log(toDos("일어나기"));
console.log(toDos("일어나기", "커피 마시기"));
console.log(toDos("일어나기", "커피 마시기", "책 읽기"));
