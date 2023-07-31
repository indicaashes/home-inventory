const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', itemsCtrl.index);
router.get('/new', ensureLoggedIn, itemsCtrl.new);
router.get('/:id', itemsCtrl.show);
router.get('/:id/edit', ensureLoggedIn, itemsCtrl.edit);
router.post('/', ensureLoggedIn, itemsCtrl.create);
router.delete('/:id', ensureLoggedIn, itemsCtrl.delete);
router.put('/:id', ensureLoggedIn, itemsCtrl.update);
router.get('/:id/notes', itemsCtrl.viewItemNotes);
router.get('/:id/notes/new', ensureLoggedIn, itemsCtrl.newNote);
router.post('/:id/notes', ensureLoggedIn, itemsCtrl.createNote);

module.exports = router;
