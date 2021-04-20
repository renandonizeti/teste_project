const Comment = require('../models/comment');
const status = require('http-status');

module.exports = {
  async index(request, response) {
    Comment.findAll()
    .then(comment => {
      if (comment) {
        response.status(status.OK).send(comment);
      }
    }).catch(error => next(error));
  },

  async create(request, response) {
    const { new_comment } = request.body;

    Comment.create({
      user_comment: new_comment,

    }).then(comment => {
      if (comment) {
        response.status(status.OK).send(comment);
      } else {
        response.status(status.NOT_FOUND).send();
      }
    }).catch(error => next(error));
  }
}




