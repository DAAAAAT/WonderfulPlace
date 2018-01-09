const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');

require('./config/database')(config)

const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// routes
require('./routes')(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
