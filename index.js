/* Dockerizing this node js server */

const express = require("express")

const PORT = process.env.PORT || 1234;

const app = express()

app.get("" , (req,res)=>{
    return res.json({
        message : "Hey from docker"
    })
})

app.listen(PORT , ()=>{
    console.log(`Server started on PORT ${PORT}`);
}) 