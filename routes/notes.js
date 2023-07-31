const express = require('express');
const router = express.Router();

const notesCtrl = require('../controllers/notes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', notesCtrl.index);
router.get('/new', ensureLoggedIn, notesCtrl.new);
router.get('/:id', notesCtrl.show);
router.get('/:id/edit', ensureLoggedIn, notesCtrl.edit);
router.post('/', ensureLoggedIn, notesCtrl.create);
router.delete('/:id', ensureLoggedIn, notesCtrl.delete);
router.put('/:id', ensureLoggedIn, notesCtrl.update);

module.exports = router;
