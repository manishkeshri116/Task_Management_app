const express = require('express');
const router = express.Router();
const { getTasks, getTaskById, createTask, updateTask, deleteTask } = require('../controllers/taskController');

// Define routes
router.get('/', getTasks); // Retrieve all tasks
router.get('/:id', getTaskById); // Retrieve a task by ID
router.post('/', createTask); // Create a new task
router.put('/:id', updateTask); // Update a task by ID
router.delete('/:id', deleteTask); // Delete a task by ID

module.exports = router;
