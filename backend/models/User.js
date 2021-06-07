const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')

//Schema

const UserScheme = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true

    }
});
UserScheme.pre('save', async function (next) {
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)

})
const User = mongoose.model('User', UserScheme)
module.exports = User;