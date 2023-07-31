const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  
  link: {
    type: String
  },
  price: {
    type: Number
  },
  moreDetails: {
    type: String
  },
  desiredItem: { 
    type: Schema.Types.ObjectId,
    ref: 'Item' 
  }
});

module.exports = mongoose.model('Note', noteSchema);
