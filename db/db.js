const mongoose = require("mongoose")
const svr = "mongodb+srv://choquedanart:2626710@mongolearn.cxavf.mongodb.net/guitarraNueva"

const connectDB = async()=>{
    try{
        await mongoose.connect(svr).then(()=>{
            console.log("base datos conectada")
        }, (err)=>{
            console.log("no se conecto " + err)
        })
    }catch(err){
        console.log(err.message)
        //process.exit()//destruye la app
    }
}

module.exports = {
    connectDB
}