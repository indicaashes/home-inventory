const Item = require('../models/item');

module.exports = {
    index,
    new: newItem
  };

  
function newItem(req, res) {
    res.render('items/new', { title: 'Add Item', errorMsg: '' });
  }

  async function index(req, res) {
    const items = await Item.find({});
    res.render('items/index', { title: 'All Items', items });
  }
