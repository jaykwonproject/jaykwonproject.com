const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    genre: {type:String},
    link: {type:String},
    title: {type:String},
    description: {type:String},
    date:{type:String}
})

const postModel = mongoose.model("post", postSchema);
postModel.syncIndexes();
module.exports = postModel;