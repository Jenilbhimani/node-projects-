const express = require('express')
var mongoose = require('mongoose')
const querystring = require('querystring')
var Empschema = new mongoose.Schema({uname:String,upwd:String},{versionKey:false});
var Empmodel = mongoose.model("employees",Empschema)
mongoose.connect("mongodb://localhost/sahil");
const app = express()
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/form.html')
})
app.post('/',(req, res) => {
    res.writeHead(200, ("content-type", "text/html"))
    if (req.method == "POST") {
        var postparameters = "";
        req.on("data", function (data) {    
            postparameters += data;
        })
        req.on("end", function () {
            var postdata = querystring.parse(postparameters)
            if (postdata["uname"] == "sahil" && postdata["upwd"] == "jenil") {
                res.write("<h1>sucess</h1>");
                var newemp = new Empmodel({"uname":"sahil","upwd":"jenil"})
                
                newemp.save(afterdatainsert);
                function afterdatainsert(error){
                    if(error){
                        console.log(error)
                    }
                    else{
                        console.log("document insert .......")
                    }
                    mongoose.disconnect()
                }
            }   
            else {
                res.write("<h1>fail</h1>")
            }
            res.end()
            console.log("post", postparameters);

        })
    }
})
app.listen(1234,()=>{
    console.log("port listion ")
})