const express = require('express');
const app = express();
const TodoRoute = express.Router();

// Todo model
let Todo = require('../models/Todo');

// Filters Todo
TodoRoute.route('/todo-filters')
  .post((req, res, next) => {

    Todo.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });

// Add Todo
TodoRoute.route('/create')
  .post((req, res, next) => {

    Todo.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });

// Get All Todos
TodoRoute.route('/')
  .get((req, res) => {

    Todo.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });

// Get single Todo
TodoRoute.route('/read/:id')
  .get((req, res) => {

    Todo.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });


// Update Todo
TodoRoute.route('/update/:id')
  .put((req, res, next) => {

    Todo.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log('Data updated successfully');
      }
    });
  });

// Delete Todo
TodoRoute.route('/delete/:id')
  .delete((req, res, next) => {

    Todo.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        });
      }
    });
  });

module.exports = TodoRoute;
