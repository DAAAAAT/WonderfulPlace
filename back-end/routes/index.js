const authCheck = require('../middleware/auth-check');
const roleCheck = require('../middleware/role-check');

const authRoutes = require('./auth');
const profileRoutes = require('./profile');
const about = require('./about');
const homeRoutes = require('./home');
const adminRoutes = require('./admin');
const destinationRoutes = require('./destination');

module.exports = (app) => {
    app.post('/login', authRoutes.login);
    app.post('/register', authRoutes.register);
    app.post('/logout', authRoutes.logout);
    app.use('/profile', authCheck, profileRoutes);
    app.use('/', homeRoutes);
    app.use('/admin',  roleCheck('Admin'), adminRoutes);
    app.use('/destinations', destinationRoutes);
    // app.get('/about',roleCheck('Admin'), about.getAbout);
};

