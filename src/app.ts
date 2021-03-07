
import { urlencoded, json } from 'body-parser'
import cors from 'cors'
import express from 'express'

import routes from './routes'

const { PORT } = process.env

const app = express()

app.use((req, res, next) => {
    next()
}, cors({ maxAge: 84600 }))
app.use(urlencoded({ extended: false }))
app.use(json())
app.use(routes)

app.listen(PORT, () => {
    console.log(
        `⚡️[mailer-server]: Server is running at http://localhost:${PORT}`
    )
})
