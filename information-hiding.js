// 24.5 캡슐화와 정보 은닉

const User = (function () {
  let _password = 0;

  function User(username, password) {
    this.username = username;
    _password = password;
  }

  User.prototype.findPassword = function () {
    console.log(`${this.username}'s password is ${_password}`);
  };

  return User;
})();

const user = new User("Daegil", 486);
user.findPassword();
