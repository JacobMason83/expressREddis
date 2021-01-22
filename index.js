const express = require('express')
const checkKey = require('./middleware/checkKey')


const port = process.env.PORT || 4000
const app = express()
const swapiRoutes = require('./routes/swapiRoutes')

app.use(express.urlencoded({ extended: false }))



app.use([checkKey, swapiRoutes])


app.listen(port, () => {
    console.log(`redis cache server runnin on port ${port}`)
})