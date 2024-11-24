const express = require("express");
const app = express();

app.get('/' , (req , res) => {
    return res.send("node + docker")
});


const PORT = process.env.PORT || 8500;
app.listen(PORT , () => {
    console.log(`Server listening at localhost:${PORT}`)
})