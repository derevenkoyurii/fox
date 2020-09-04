const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Todo = new Schema({
  id: String,
  title: String,
  notes: String,
  startDate: String,
  dueDate: Boolean,
  completed: Boolean,
  starred: Boolean,
  important: Boolean,
  deleted: Boolean,
  tags: [
    {
      id: Number,
      name: String,
      label: String,
      color: String
    }
  ]
}, {
  collection: 'todos'
});

module.exports = mongoose.model('Todo', Todo);
