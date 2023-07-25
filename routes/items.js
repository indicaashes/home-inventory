const express = require('express');
const router = express.Router();

const itemsCtrl = require('../controllers/items');

router.get('/', itemsCtrl.index);
router.get('/new', itemsCtrl.new);

module.exports = router;
