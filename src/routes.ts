import { Router } from 'express'

import ExampleController from '@controllers/ExampleController'

const routes = Router()

routes.get('/', async (req, res) => {
    res.send('⚡️[server]: Server is running')
})

routes.get('/test', async (req, res) => {
    res.send({ message: 'Ok' })
})

routes.post('/example', ExampleController.show)

export default routes
