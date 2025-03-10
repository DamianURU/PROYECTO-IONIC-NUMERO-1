const express = require('express')
const db = require('./utils/queries')
const bodyParser = require('body-parser')
const app = express()
const { pool } = require("./dbConfig9o0lp-")
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })   
  
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(PORT, function() {
    console.log('App listening on ${PORT}');
})