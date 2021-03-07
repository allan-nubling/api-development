import request from 'supertest'
import app from '@config/app'

describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/').expect(200)
    })

    test('It should response the GET /test method', () => {
        return request(app)
            .get('/test')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(resp => {
                if (typeof resp.body.message !== 'string') throw new Error('Response message worng type')
            })
    })
})
