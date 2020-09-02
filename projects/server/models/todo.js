const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Todo = new Schema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  notes: {
    type: String
  },
  startDate: {
    type: String
  },
  dueDate: {
    type: Boolean
  },
  completed: {
    type: Boolean
  },
  starred: {
    type: Boolean
  },
  important: {
    type: Boolean
  },
  deleted: {
    type: Boolean
  },
  tags: [
    {
      'id': {
        type: Number
      },
      'name': {
        type: String
      },
      'label': {
        type: String
      },
      'color': {
        type: String
      }
    }
  ]
}, {
  collection: 'todos'
});

module.exports = mongoose.model('Todo', Todo);
