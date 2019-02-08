const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
// const apiRoutes = require('./api-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
const url = 'mongodb+srv://lite_user:bgYFQVRd0ErDqgEw@saint-cluster-xkgnt.mongodb.net/todo?retryWrites=true';
mongoose.connect(url, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;

const todoController = require('./todoController');

app.get('/', (req, res) => res.send('Express in da house'));
app.route('/todo')
    .get(todoController.get)
    .post(todoController.new)
    .put(todoController.update)
    .delete(todoController.delete);
// app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
