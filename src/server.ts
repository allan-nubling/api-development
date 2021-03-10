import app from '@config/app'

const { PORT } = process.env

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})

