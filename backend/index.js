const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postModel = require("./models/modelPost");
const cors = require("cors");
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

const port = process.env.PORT || 3001;

app.get("/getPosts",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "https://www.jaykwonproject.com");
    postModel.find().then(studyCollection=>res.json(studyCollection));
});

app.post("/newPost",  (req,res)=>{
    const genre = req.body.genre;
    const link = req.body.link;
    const title = req.body.title;
    const date = req.body.date;
    const description = req.body.description;

    const newPost = new postModel({
        genre,
        link,
        title,
        date,
        description
    });
    //console.log(post);
    newPost.save();  
    res.json(newPost);
});

app.use("/",(req,res)=>{
    res.send('server is running');
});

app.listen(port,function(){
    console.log("express is running")
});
