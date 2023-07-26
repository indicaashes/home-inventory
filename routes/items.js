const express = require('express');
const router = express.Router();

const itemsCtrl = require('../controllers/items');

router.get('/new', itemsCtrl.newItem);
router.get('/:id', itemsCtrl.showItems);
router.get('/index', itemsCtrl.index);
router.get('/:id/edit', itemsCtrl.edit);
router.post('/index', itemsCtrl.create);
router.put('/:id', itemsCtrl.update);
router.delete('/:id', itemsCtrl.deleteItems);


module.exports = router;
