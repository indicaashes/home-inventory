const Item = require('../models/item');
const Note = require('../models/note');

module.exports = {
  index,
  show,
  new: newNote, 
  create,
  delete: deleteNote,
  edit,
  update,
};

async function index(req, res) {
  const desiredItems = await Item.find({ itemStatus: 'Desired' });
  res.render('notes/index', { title: 'Desired Inventory Notes', desiredItems });
}

async function show(req, res) {
  const note = await Note.findById(req.params.id);
  res.render('notes/show', { title: '', note });
}

function newNote(req, res) {
  const itemId = req.params.id; 

  res.render('items/newNote', { title: 'Add Note', errorMsg: '', item: { _id: itemId } });
}

async function create(req, res) {
  const newNote = await Note.create(req.body);
  const itemId = req.body.itemId;
  await Item.findByIdAndUpdate(itemId, { $push: { notes: newNote._id } });

  res.redirect('/items'); 
}

async function deleteNote(req, res) {
  await Note.findByIdAndDelete(req.params.id);
  res.redirect('/notes');
}

async function edit(req, res) {
  const note = await Note.findById(req.params.id);
  res.render('notes/edit', {
    title: 'Edit Note',
    note,
  });
}

async function update(req, res) {
  await Note.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/notes/${req.params.id}`);
}
