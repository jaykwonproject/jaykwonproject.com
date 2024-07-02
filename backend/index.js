const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postModel = require("./models/modelPost");
const userModel = require("./models/modeUser");
const cors = require("cors");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cors({credentials:true, origin:'https://www.jaykwonproject.com'}));
app.use(express.json());
app.use(cookieParser() );
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0/\/", salt);
const secret = process.env.SECRET;
mongoose.connect(process.env.MONGODB_URI);

const port = process.env.PORT || 3001;


app.get("/getPosts",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    postModel.find().then(studyCollection=>res.json(studyCollection));
});

app.get('/getPost/:slug', async (req, res) => {
    const { slug } = req.params;
  
    try {
      const post = await postModel.findOne({ slug });
      if (!post) {
        return res.status(404).send('Post not found');
      }
      res.json(post);
    } catch (error) {
      console.error('Error fetching post:', error);
      res.status(500).send('Server error');
    }
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


app.post("/register", async(req,res)=>{
    const {username,password} = req.body;
    const saltedpassword = bcrypt.hashSync(password, salt);
    res.send(username+' and '+ saltedpassword);
 });

 
app.post("/login", async(req,res)=>{
    const {username,password} = req.body;
    const userDoc = await userModel.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk){
        jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token', token).json({
                username,
            });
        })
    }
    else{
        res.status(400).json('wrong credentials');
    }
});

app.post('/logout', (req,res)=>{
    res.cookie('token', '').json('ok');
});

app.get('/profile', (req,res)=>{
    const {token} = req.cookies;
    console.log(req);
    console.log(token);
    console.log(secret);
    if(token){
        jwt.verify(token, secret, {}, (err,info) =>{
            if(err) throw err;
            res.json(info);
        })
    }
    else{
        res.json('not logged in');
    }
    
});

app.use("/",(req,res)=>{
    res.send('server is running');
});

app.listen(port,function(){
    console.log("express is running: "+ port)
});
