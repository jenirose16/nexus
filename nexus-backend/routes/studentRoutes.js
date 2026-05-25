// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const { getAllStudents, createStudent, loginUser, deleteStudent } = require('../controllers/studentController');

router.route('/').get(getAllStudents).post(createStudent);
router.route('/login').post(loginUser);
router.route('/:id').delete(deleteStudent);

module.exports = router;