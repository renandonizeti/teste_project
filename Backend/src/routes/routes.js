const express = require('express');
const router = express.Router();
const WatsonController = require('../controllers/WatsonController.js');


const CommentController = require ('../controllers/controller.js');

router.post('/comments/new', CommentController.create);
router.get('/comments', CommentController.index);
router.post('/synthesize', WatsonController.store);

module.exports = router;
