const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/api/register', registerRoute)
app.use('/api/login', loginRoute)
app.use('/api/users', usersRoute)

module.exports.app = app;