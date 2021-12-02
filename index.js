/*const express = require ("express")
const cors = require("cors")

const app = express()
const guitarras = express.Router();//carga una independencia se ahce mini aplicacion
//app.use(cors())

const db = require("./db/db");
db.connectDB();

app.get("/",(req,res)=>{
    res.send("hola desde principal")
})

guitarras.get("/",(req,res)=>{
    res.send("hola desde guitarras")
})

app.use('/guitarras',guitarras)//implementa ese router

app.listen(8080,()=>{
    console.log("escucho puerto 8080")
})
*/

const express = require("express");
const {connectDB} = require("./db/db");
const app = express();
const{guitarras} = require("./routers/guitaarras");
connectDB();

app.use(express.json())//hace lo mismo que hacia el bodyparser por que ya esta incluido en express
app.use('/guitarras',guitarras)

app.get("/api",(req,res)=>{
    console.log(req.body)
    res.send("hola desde app")
})

app.listen(8080,()=>{
    console.log("eschuco puerto 8080")
})