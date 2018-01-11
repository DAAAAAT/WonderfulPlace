const authCheck = require('../middleware/auth-check');
const roleCheck = require('../middleware/role-check');

const authRoutes = require('./auth');
const profileRoutes = require('./profile')
const about = require('./about');


module.exports = (app) => {
    app.post('/login', authRoutes.login);
    app.post('/register', authRoutes.register);
    app.use('/profile', authCheck, profileRoutes);
    // app.get('/about',roleCheck('Admin'), about.getAbout);
};

