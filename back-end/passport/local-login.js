const jwt = require('jsonwebtoken')
const PassportLocalStrategy = require('passport-local').Strategy
const User = require('mongoose').model('User');


module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = {
    email: email.trim(),
    password: password.trim()
  }

  let savedUser = await User.findOne({email: email})

  if (!savedUser || savedUser === null) {
    const error = new Error('Incorrect email or password')
    error.name = 'IncorrectCredentialsError'

    return done(error)
  }

  if (!savedUser.authenticate(user.password)) {
    const error = new Error('Incorrect email or password')
    error.name = 'IncorrectCredentialsError'

    return done(error)
  }

  const payload = {
    sub: savedUser._id
  }

  // create a token string
  const token = jwt.sign(payload, 's0m3 r4nd0m str1ng')
  const data = {
    userName: savedUser.userName,
    id: savedUser._id,
    roles: savedUser.roles
  }

  return done(null, token, data)
})
