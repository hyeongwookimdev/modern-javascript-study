// 24.4 클로저의 활용

const password = (function () {
  let password = "486";

  return function (aux, newPassword) {
    password = aux(newPassword);
    return password;
  };
})();

function changePassword(newPassword) {
  return newPassword;
}

console.log(password(changePassword, "1004"));
