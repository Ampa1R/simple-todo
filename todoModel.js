// todoModel
var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
  done: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  add_date: {
    type: Date,
    default: Date.now
  }
});

// Export Contact model
var Todo = module.exports = mongoose.model('todos', todoSchema);
