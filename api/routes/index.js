const express = require('express');
const jwt = require('express-jwt');

const ctrlAuth = require('../controllers/authentication');
const ctrlProfile = require('../controllers/profile');
const ctrlTodo = require('../controllers/todo');

const router = express.Router();

const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// todos
router.get('/todo', ctrlTodo.todoRead);

module.exports = router;
