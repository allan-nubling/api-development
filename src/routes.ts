import { Router } from 'express'

import ExampleController from '@controllers/ExampleController'

const routes = Router()

routes.get('/', async (req, res) => {
    res.send('⚡️[server]: Server is running')
})

routes.get('/test', async (req, res) => {
    console.log("test")
    res.send({ message: 'ok' })
})

routes.post('/example', ExampleController.show)

export default routes
