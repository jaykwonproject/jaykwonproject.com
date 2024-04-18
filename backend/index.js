const express = require("express");
const app = express();

const port = process.env.PORT || 3001;

app.use("/",(req,res)=>{
    res.send('server is running');
});

app.listen(port,function(){
    console.log("express is running")
});
