const express = require('express')
const bodyParser = require('body-parser')

const server = express()
server.use(express.json())

const knex = require('knex')
const dbConfig = require('./knexfile')
const db = knex(dbConfig.development)

const projectRoutes = require('./routes/projects')
const actionRoutes = require('./routes/actions')

server.use(bodyParser.json())

// test route
server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' })
})

// routes
server.use('/', projectRoutes)
server.use('/', actionRoutes)

server.listen(8000, () => console.log('Running on port 8000'))
