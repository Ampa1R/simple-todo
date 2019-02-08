// mmr/controller
Todo = require('./todoModel');

// Handle index actions
exports.get = function (req, res) {

  Todo.find({}, null, {limit: 10, sort: "done -add_date"}).then((data) => {
    res.json({
      status: "Success",
      message: "List of ToDo",
      data: data,
      what: "the fuck"
    });
  }).catch(console.error);
};

// Handle create contact actions
exports.new = function (req, res) {
  var todo = new Todo();
  todo.name = req.body.todo;

  // save the and check for errors
  todo.save(function (err) {
    if (err)
      res.json(err);
    else
      res.json({
        message: 'New todo created!',
        data: todo
      });
  });
};

// Handle update contact info
exports.update = function (req, res) {
  Todo.findById(req.body.id, function (err, item) {
    if (err)
      res.send(err);
    else{
      item.done = req.body.done;
      item.save(function (err) {
        if (err)
          res.json(err);
        else{
          res.json({
            message: 'Mmr Info updated',
            data: item
          });
        }
      });
    }
  });
};

// Handle delete mmr
exports.delete = function (req, res) {
    Todo.deleteOne({ _id: req.body.id }).then((err, item) => {
        if (err)
          res.send(err);
        else
          res.json({
            status: "success",
            message: 'Item deleted'
          });
    });
};
