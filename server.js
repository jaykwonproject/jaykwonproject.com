const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postModel = require("./models/modelPost");
const cors = require("cors");
const path = require("path"); 
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

const port = process.env.PORT || 3001;

app.get("/getPosts",(req,res)=>{
    /*CORS enabled*/
    res.set('Access-Control-Allow-Origin', '*');
    postModel.find().then(studyCollection=>res.json(studyCollection));
});

app.post("/newPost",  (req,res)=>{
    const genre = req.body.genre;
    const link = req.body.link;
    const title = req.body.title;
    const description = req.body.description;

    const newPost = new postModel({
        genre,
        link,
        title,
        description
    });
    //console.log(post);
    newPost.save();  
    res.json(newPost);
});


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(port,function(){
    console.log("express is running")
});
