const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

const detailsSchema = new Schema({
  color: {
    type: String,
    },
  link: {
    type: String,
  },
  keep: { type: Boolean,
    default: true 
  },
  moreDetails: {
    type: String
  }
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


  module.exports = mongoose.model('Item', itemSchema);
  