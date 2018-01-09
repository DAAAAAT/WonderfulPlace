const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');

module.exports = (role) =>  (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).end();
    }

    // get the last part from a authorization header string like "bearer token-value"
    const token = req.headers.authorization.split(' ')[1];

    // decode the token using a secret key-phrase
    return jwt.verify(token, 's0m3 r4nd0m str1ng', async (err, decoded) => {
    // the 401 code is for unauthorized status
        if (err) { return res.status(401).end(); }

        const userId = decoded.sub;
        const user = await User.findById(userId);
        if (!user || user.roles.indexOf(role) <= -1) {
            return res.status(401).end();
        }

        req.user = user;

        return next();
    });
};
