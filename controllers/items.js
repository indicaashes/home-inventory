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
    const desiredItems = await Item.find({itemStatus: 'Desired'});
    const inHomeItems = await Item.find({itemStatus: 'In-Home'});
    res.render('items/index', { title: 'Home Inventory', inHomeItems,desiredItems });
  }
 
  async function show(req, res) {
    const item = await Item.findById(req.params.id);

    res.render('items/show', {title: 'Item Details',
    item});
  } 
 
  function newItem(req, res) {
    res.render('items/new', { title: 'Add Item', errorMsg: '' });
  }
  async function create(req, res) {
    Item.create(req.body);

    res.redirect('/items');

  }

  function deleteItem(req, res) {
    Item.deleteOne(req.params.id);  
    res.redirect('/items');

  }  

  function edit(req, res) {
    const item = Item.getOne(req.params.id);
    res.render('items/edit', {
      title: "Edit Items",
      item
    });
  }

  function update(req, res) {
    req.body.done = !!req.body.done;
    Item.update(req.params.id, req.body);
    res.redirect(`/items/${req.params.id}`);
  }