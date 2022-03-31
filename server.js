const express=require('express');
//const cors=require('cors');
const mongoose=require('mongoose');
const data=require('./data');
const User=require('./usermodel');
const app = express();
app.use (express.json());
// app.use(cors());

//connect to mongodb database

mongoose.connect('mongodb://localhost:27017/skillqode',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/insert",(req, res)=>{
    const result =User.insertMany(data.users)
    res.send(result);
})

// assgin the port number 
const port=process.env.PORT || 3000;
app.listen(port,()=>{console.log("server listening on port",port)});
