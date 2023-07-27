const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    userId: ObjectId,
    itemId: [ObjectId],
    title: {
        type: String,
        enum:  'Owned', 'Desire'
    },
});
module.exports = mongoose.model('List', listSchema);
