const Express 	    = require('express');
const Router        = Express.Router();
const dog   = require('../controllers/dog.controller');

Router.route('/dogs').get(dog.list).post(dog.create);
Router.route('/dog/:id').get(dog.get).put(dog.edit).delete(dog.remove);

module.exports = Router;
