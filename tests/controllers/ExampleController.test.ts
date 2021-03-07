import request from 'supertest'
import app from '../../src/config/app'

describe('Test the ExampleController', () => {
    test('Test POST /example route', () => {
        return request(app).post('/example').expect(200)
    })
})
