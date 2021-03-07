import { urlencoded, json } from 'body-parser'
import cors from 'cors'
import express from 'express'

import routes from '../routes'

const app = express()

// app.use((req, res, next) => {
//     next()
// }, cors({ maxAge: 84600 }))
app.use(cors())
app.use(urlencoded({ extended: false }))
app.use(json())
app.use(routes)

export default app
