const express = require("express");

const app = express();

const PORT = process.env.PORT || 6969;

app.get("" , (req,res)=>{
    return res.json({
        message : "Hey from server"
    })
})

app.listen(PORT , ()=>{
    console.log(`Hey from server on ${PORT}`);
})

