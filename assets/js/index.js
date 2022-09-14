"use strict";
function User (firstName, lastName, email, age, isLoggedIn) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isLoggedIn = isLoggedIn;
};

const userProto = {
  getFullName: function(){
    return `${this.firstName} ${this.lastName}`;
  },
  logout: function(){
    return this.isLoggedIn = false;
  },
  login: function(){
    return this.isLoggedIn = true;
  }
};


User.prototype = userProto;


const user1 = new User ('Bohdan', 'Zaporojets', 'bohdanukr@gmail.com', 45, true);
const user2 = new User ('Artem', 'Artemenko', 'artem@gmail.com', 30, false);


// user1.__proto__=getFullName;
// user2.__proto__=getFullName;