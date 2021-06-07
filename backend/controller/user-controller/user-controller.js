const User = require('../../models/User')
const errorMiddlewareHandler = require('../../middleware/errorMiddlewareHandler')
const register = async function (req, res) {
    try {
        const { name, email, password } = req.body;
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            // throw new Error('User Already Exist')
            throw new Error("User Exist")
        }
        const user = await User.create({ name, email, password })
        res.send(user)
    }
    catch (error) {
        res.send(error)
    }
}

const login = async function (req, res) {
    const { email, password } = req.body;
    res.send("awaisniaz")
    // const user = await User.findOne({ email: email })
    // if (user) {
    //     res.status(200).json({
    //         _id: user.id,
    //         name: user.name
    //     })
    // }
    // else {
    //     //throw new Error("Invalid Credential")
    //     res.status(401)
    // }

}

const updateUser = function (req, res) {
    res.send("I am Update User")
}

const deleteUser = function (req, res) {
    res.send('I am Delete User')
}
const fetchUser = function (req, res) {
    console.log('I am Dead')
    res.send('I am Getting User')
}

module.exports = { register, login, updateUser, deleteUser, fetchUser }