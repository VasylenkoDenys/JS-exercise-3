"use strict";
function User (firstName, lastName, email, age, isLoggedIn) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isLoggedIn = isLoggedIn;
};

const getFullName = {
  userName: function(){
    console.log(`${this.firstName} ${this.lastName}`);
  }
};

const logout = {
  changeLogOut: function(isLoggedIn){
   return isLoggedIn === false;
  }
};

const login = {
  changeLogIn: function(isLoggedIn){
    return isLoggedIn === true;
  }
};

// User.prototype = getFullName;
// User.prototype = logout;
User.prototype = login;


const user1 = new User ('Bohdan', 'Zaporojets', 'bohdanukr@gmail.com', 45, true);
const user2 = new User ('Artem', 'Artemenko', 'artem@gmail.com', 30, false);


// user1.__proto__=getFullName;
// user2.__proto__=getFullName;