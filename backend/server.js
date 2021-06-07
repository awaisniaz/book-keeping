const express = require('express');
const user = require('./router/user-router.js')
require('./config/index')
const errorMiddlewareHandler = require('./middleware/errorMiddlewareHandler')
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000

// Adding Middleware
app.use(express.json())
app.use(errorMiddlewareHandler)
// User Router
app.use('/api/users', user)

// Server
app.listen(PORT, () => {
    console.log("Server is up and running")
})
