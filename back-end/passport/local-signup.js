const PassportLocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

const encryption = require('../util/encryption')

const salt = encryption.generateSalt()

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = {
    email: email.trim(),
    password: password.trim(),
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  }

  let isUserExist = await User.findOne({email: email});
  if (isUserExist !== null) {
    return done('E-mail already exists!')
  }
  // usersData.save(user)

  // save in mongoo
  const hashedPass = encryption.generateHashedPassword(salt, user.password)

  try {
    await User.create({
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      salt,
      hashedPass,
      email: user.email,
      roles: []
    })
  } catch (error) {   
    return done(error.message)
  }
  

  return done(null)
})
