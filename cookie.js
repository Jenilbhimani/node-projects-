const express = require('express');
const cookieparser = require('cookie-parser');
const app = express();
app.use(cookieparser());

app.get("/setcookies",(req, res) => {
    res.cookie("sub_one","recactjs");
    res.cookie("sub_two","nodejs");
    res.cookie("sub_three","mongodb");
    res.send({"msg":"cookie are sate"});
});

app.get("/getcookies",(req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);
});

app.get("/deletecookies",(req, res) => {
    res.clearCookie("sub_one");
    res.send("cookie deleted.....");

})

app.listen(7777,()=>{
    console.log("listening 7777")
});