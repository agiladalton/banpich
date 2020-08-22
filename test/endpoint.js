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
        //.set('auth', '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c')
        .send(dataJson)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            //expect(response.body).toEqual({message : 'Hello ' + dataJson.to + ' your message will be send' })

            //Then he endPoint must be returned this result: {“message” : “Hello Juan Perez your message will be send” }
            //Other HTTP Methods calls must returns string ERROR
            t.falsy(err, res.body.mensaje)

            t.deepEqual(res.body.message, 'Hello Juan Perez your message will be send')

            t.end()
            
        })
})