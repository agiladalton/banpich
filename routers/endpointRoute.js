const express = require('express')

const api = express.Router()

api.post('/DevOps', (req, res) => {
    const token = req.headers['auth']

    if (token == '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c') {
        res.status(200).send({message : 'Hello ' + req.body.to + ' your message will be send' })
    } else {
        res.status(201).send({mensaje: 'Error de autenticación'})
    }
})

module.exports = api