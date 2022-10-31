// 16.3.2 접근자 프로퍼티

const user = {
  username: "Hyuwoo",

  get changeUsername() {
    return this.username;
  },

  set changeUsername(name) {
    this.username = name;
  },
};

user.changeUsername = "Taesan";
console.log(user.changeUsername); // Taesan
