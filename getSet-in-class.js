class User {
  constructor(username, id) {
    this.username = username;
    this.id = id;
  }

  get usersId() {
    return `${this.username}'s ID is ${this.id} `;
  }

  set usersId(userInput) {
    [this.username, this.id] = userInput.split(" ");
  }
}

const user = new User("Daegil", "Lucky");
console.log(user.username, user.id); // Daegil Lucky
user.usersId = "Bom Spring";
console.log(user.username, user.id); // Bom Spring
console.log(user.usersId);
