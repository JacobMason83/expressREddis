const express = require('express')


const port = process.env.PORT || 4000
const app = express()
const swapiRoutes = require('./routes/swapiRoutes')

app.use(express.urlencoded({ extended: false }))
app.use(swapiRoutes)


app.listen(port, () => {
    console.log(`redis cache server runnin on port ${port}`)
})