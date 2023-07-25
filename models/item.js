const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

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
    owned: { 
      type: Boolean, 
      default: true },
    keep: { type: Boolean,
      default: true },

    userName: String,
    userAvatar: String
}, {  
    timestamps: true
  });
  
  module.exports = mongoose.model('Item', itemSchema);