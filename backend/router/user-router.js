const express = require('express')
const {
    register,
    login,
    updateUser,
    deleteUser, fetchUser } = require('../controller/user-controller/user-controller');
var router = express.Router()

// User Router
router.post('/register/', register)
router.post('/login/', login)
router.put('/update', updateUser)
router.delete('/delete/:id', deleteUser)
router.get('/fetchUser', fetchUser)

module.exports = router;