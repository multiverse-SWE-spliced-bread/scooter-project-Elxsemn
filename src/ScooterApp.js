const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  // ScooterApp code here

    constructor () {
        this.users = []
    }

    signUp (username, password, age) {
//Does the user exist 
if (this.users.find(u => u.username === username)) throw new Error('User already exists')
// Are they old enough?
if (age < 18) throw new Error('Must be 18 or over.')
const user = new user(username, password, age)
this.users.push(user)
return user
    }
logIn (username, password) {
    const user = this.users.find(u => u.username === username)
    if (!user) throw new Error('Please sign up first')
    if (user.password !== password) throw new Error ('Cannot sign in.')
    user.loggedIn = true
}



}

module.exports = ScooterApp;
