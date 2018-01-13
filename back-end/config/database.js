const mongoose = require('mongoose');   
mongoose.Promise = global.Promise;

const User = require('../models/User')
const Destination = require('../models/Destination')
const Category = require('../models/Category')
const Comment = require('../models/Comment')
const Rate = require('../models/Rate')

module.exports = (config) => {
    mongoose.connect(config.dbPath, {
        useMongoClient: true
    })
    const db = mongoose.connection
    db.once('open', err => {
        if (err) throw err
        User.seedAdminUser().then(() => {
            console.log('Database ready')
        }).catch((reason) => {
            console.log('Something went wrong');
            console.log(reason);
        });
    })
    db.on('error', reason => {
        console.log(reason)
    })
} 