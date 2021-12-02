const express = require("express");
const {listAllGuitars, saveGuitar, updateGuitar, updatePriceGuitar, deleteGuitarra} = require("../controllers/guitarraController")
const guitarras = express.Router();
/*guitarras.get("/",(req,res)=>{
    console.log("recibi  peticion get")
    res.send("hola desde get guitarras")
})
guitarras.post("/",(req,res)=>{
    console.log("recibi  peticion post")
    console.log(req.body)
    res.send("hola desde post guitarras")
});*/ 
//lo anteior se remplaza por lo siguiente

guitarras.get('/', listAllGuitars);
guitarras.post('/', saveGuitar);
guitarras.put('/', updateGuitar)
guirarras.patch('/price',updatePriceGuitar )
guitarras.delete('/',deleteGuitarra)

module.exports = {
    guitarras
}
