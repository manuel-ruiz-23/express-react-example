const express = require('express')
const path = require('path')
const authRoutes = require('./src/routers/user')
const port = process.env.PORT
require('./src/db/db')

const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))

app.use(express.json())
// declaracion de rutas
app.use(authRoutes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})