const request = require('supertest')
const app = require('../app')
const test = require('ava')

/*
    Build a microservice:

    Build a microservice with /DevOps endpoint
    When the user send data JSON: {“message” : “This is a test”, “to”: “Juan Perez”, “from”: “Rita Asturia”, “timeToLifeSec” : 45 }
    Then he endPoint must be returned this result: {“message” : “Hello Juan Perez your message will be send” }
    Other HTTP Methods calls must returns string ERROR
*/

test.cb('validar endpoint', (t) => {
    const dataJson = {message : 'This is a test', to: 'Juan Perez', from: 'Rita Asturia', timeToLifeSec : 45 }

    // When the user send data JSON
    request(app)
        .post('/DevOps')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            t.falsy(err, 'No deberia salir error')
            t.end() 
        })
})