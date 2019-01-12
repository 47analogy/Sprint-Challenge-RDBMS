const express = require('express')
const ActionsRouter = express.Router()

// add an action
ActionsRouter.post('/actions', (req, res) => {
  res.status(201).json({ message: 'add an action' })
})

module.exports = ActionsRouter
