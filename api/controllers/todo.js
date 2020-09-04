const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

module.exports.todoRead = (req, res) => {

  Todo.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
};

