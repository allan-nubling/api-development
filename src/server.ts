import app from '@config/app'

const { PORT } = process.env

app.listen(PORT, () => {
    console.log(`⚡️[mailer-server]: Server is running at http://localhost:${PORT}`)
})
