const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    genre: {type:String},
    link: {type:String},
    title: {type:String},
    description: {type:String},
    timestmp: {type:String}
}, {collection : 'test'})

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;