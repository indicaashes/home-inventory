const Item = require('../models/item');

module.exports = {
  index,
  showItems,
  new: newItem,
  create,
  delete: deleteItem,
  edit,
  update
};

  async function index(req, res) {
    const items = await Item.find({});
    res.render('items/index', { title: 'Home Inventory', items });
  }
 
  async function showItems(req, res) {
    const item = await Item.findById(req.params.id);

    res.render('items/show', {title: 'Item Details',
    item});
  } 
 
  function newItem(req, res) {
    res.render('items/new', { title: 'Add Item', errorMsg: '' });
  }
  async function create(req, res) {
    Item.create(req.body);
  }
  function deleteItem(req, res) {
    Item.deleteOne(req.params.id);

  }  

  function edit(req, res) {
    const item = Item.getOne(req.params.id);
    res.render('items/edit', {
      title: "Edit Items",
      item,
    });
  }

  function update(req, res) {
    req.body.done = !!req.body.done;
    Item.update(req.params.id, req.body);
    res.redirect(`/items/${req.params.id}`);
  }