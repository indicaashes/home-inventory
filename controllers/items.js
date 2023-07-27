const Item = require('../models/item');

module.exports = {
  index,
  show,
  new: newItem,
  create,
  delete: deleteItem,
  edit,
  update
};

async function index(req, res) {
  const desiredItems = await Item.find({ itemStatus: 'Desired' });
  const inHomeItems = await Item.find({ itemStatus: 'In-Home' });
  res.render('items/index', { title: 'Home Inventory', inHomeItems, desiredItems });
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.render('items/show', { title: 'Item Details', item });
}

function newItem(req, res) {
  res.render('items/new', { title: 'Add Item', errorMsg: '' });
}

async function create(req, res) {
  await Item.create(req.body); 
  res.redirect('/items');
}

async function deleteItem(req, res) {
  await Item.findByIdAndDelete(req.params.id); 
  res.redirect('/items');
}

async function edit(req, res) {
  const item = await Item.findById(req.params.id); 
  res.render('items/edit', {
    title: 'Edit Item',
    item,
  });
}

async function update(req, res) {
  await Item.findByIdAndUpdate(req.params.id, req.body); 
  res.redirect(`/items/${req.params.id}`);
}
