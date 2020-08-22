const express = require('express')
const botyParser = require('body-parser')
const bodyParser = require('body-parser')
const endpointRoutes = require('./routers/endpointRoute')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', endpointRoutes)

module.exports = app