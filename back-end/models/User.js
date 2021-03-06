const mongoose = require('mongoose')
const encryption = require('../util/encryption')

const userSchema = new mongoose.Schema({
    userName: {type: mongoose.Schema.Types.String, minlength: 4, required: true, unique: [true, 'userName already exists!']},
    firstName: {type: mongoose.Schema.Types.String,minlength: 4, maxlength: 15, required: true},
    lastName: {type: mongoose.Schema.Types.String,minlength: 4, maxlength: 15, required: true},
    image: {type: mongoose.Schema.Types.String},
    email: {type: mongoose.Schema.Types.String, minlength: 8, required: true, unique: [true, 'E-mail already exists!'] },    
    myVisitedPlaces: [{type: mongoose.Schema.Types.ObjectId, ref: "Place"}],
    wishToVisit: [{type: mongoose.Schema.Types.ObjectId, ref: "Place"}],
    hashedPass: {type: mongoose.Schema.Types.String, required: true},
    salt: {type: mongoose.Schema.Types.String, required: true},
    roles: [{ type: mongoose.Schema.Types.String }]
})

userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass
    }   
})

userSchema.virtual('isAdmin').get(function () {
    return this.roles.indexOf('Admin') > -1
})

const User = mongoose.model('User', userSchema)

User.seedAdminUser = async () => {
    try {
        let users = await User.find()
        if (users.length > 0) {
            return
        }
        const salt = encryption.generateSalt()
        const hashedPass = encryption.generateHashedPassword(salt, 'Admin')      
        return User.create({
            userName: 'Admin',
			firstName:'Alex',
			lastName: 'Alex',
            salt,
            hashedPass,
            email: 'admin@admin.bg',
            roles: ['Admin']
        })
    } catch (e) {
       console.log(e) 
    }
}

module.exports = User;