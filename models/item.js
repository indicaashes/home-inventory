const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

module.exports ={
    deleteOne
  };

const detailsSchema = new Schema({
  color: {
    type: String,
    },
  link: {
    type: String,
  },
  keep: { type: Boolean,
    default: true },
})

const itemSchema = new Schema({
    title: { type: String, required: true },
    color: {
      type: String,
      },
    
    location: {
      type: String,
      enum: ['Living-Room', 'Kitchen', 'Bedroom', 'Bathroom']
    },
    link: {
      type: String,
    },
    itemStatus: { 
      type: String, 
      enum: ['In-Home', 'Desired'] },
    userName: String,
    userAvatar: String,

    details: [detailsSchema]}, {  
    timestamps: true,
   
  })
  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = items.findIndex(item => item.id === id);
    items.splice(idx, 1);
  };
  
  module.exports = mongoose.model('Item', itemSchema);
  