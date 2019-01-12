const express = require('express')
const ProjectsRouter = express.Router()

// add a project
ProjectsRouter.post('/projects', (req, res) => {
  res.status(201).json({ message: 'add a project' })
})

// get an project by id
ProjectsRouter.get('/projects/:projectID', (req, res) => {
  // const projectID = req.params.projectID
  res.status(200).json({ message: 'get project by id' })
})

module.exports = ProjectsRouter
