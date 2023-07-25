const Item = require('../models/item');

module.exports = {
    show
  };

async function show(req, res) {
    const item = await Item.findById(req.params.id).populate('item');
  }