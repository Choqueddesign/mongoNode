const express = require("express");
const guitarras = express.Router();


guitarras.get("/",(req,res)=>{
    console.log("recibi  peticion get")
    res.send("hola desde get guitarras")
})

guitarras.post("/",(req,res)=>{
    console.log("recibi  peticion post")
    console.log(req.body)
    res.send("hola desde post guitarras")
});

module.exports = {
    guitarras
}
