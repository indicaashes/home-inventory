const Item = require('../models/item');
const Note = require('../models/note');

module.exports = {
  index,
  show,
  new: newItem,
  create,
  delete: deleteItem,
  edit,
  update,
  viewItemNotes,
  newNote,
  createNote,
};

async function index(req, res) {
  const desiredItems = await Item.find({ itemStatus: 'Desired' });
  const inHomeItems = await Item.find({ itemStatus: 'In-Home' });
  res.render('items/index', { title: 'Home Inventory', inHomeItems, desiredItems });
}

async function show(req, res) {
  try {
    const item = await Item.findById(req.params.id).populate('details.notes');
    res.render('items/show', { title: '', item });
  } catch (err) {
    console.error('Error fetching item details:', err);
    res.redirect('/items');
  }
}

function newItem(req, res) {
  res.render('items/new', { title: 'Add Item', errorMsg: '' });
}

async function create(req, res) {
  try {
    const newItem = await Item.create(req.body);
    res.redirect('/items');
  } catch (err) {
    console.error('Error creating item:', err);
    res.redirect('/items/new');
  }
}

async function deleteItem(req, res) {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.redirect('/items');
  } catch (err) {
    console.error('Error deleting item:', err);
    res.redirect(`/items/${req.params.id}`);
  }
}

async function edit(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    res.render('items/edit', {
      title: 'Edit Item',
      item,
    });
  } catch (err) {
    console.error('Error fetching item details:', err);
    res.redirect('/items');
  }
}

async function update(req, res) {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/items/${updatedItem._id}`);
  } catch (err) {
    console.error('Error updating item:', err);
    res.redirect(`/items/${req.params.id}`);
  }
}

async function viewItemNotes(req, res) {
  try {
    const item = await Item.findById(req.params.id).populate('details.notes');
    const notes = item.details[0].notes;
    res.render('items/notes', { title: 'Item Notes', item, notes });
  } catch (err) {
    console.error('Error viewing item notes:', err);
    res.redirect('/items');
  }
}

async function newNote(req, res) {
  try {
    const itemId = req.params.id;
    const item = await Item.findById(itemId); // Fetch the item object from the database
    res.render('items/newNote', { title: 'Add Note', errorMsg: '', item }); // Pass the item object to the view
  } catch (err) {
    console.error('Error fetching item details:', err);
    res.redirect('/items');
  }
}


async function createNote(req, res) {
  try {
    const newNote = await Note.create(req.body);
    const itemId = req.params.id;
    await Item.findByIdAndUpdate(itemId, { $push: { 'details[0].notes': newNote._id } }); 
    
    res.redirect(`/items/${itemId}`);  
  } catch (err) {
    console.error('Error creating note:', err);
    res.redirect(`/items/${req.params.id}/notes/new`);
  }
}

