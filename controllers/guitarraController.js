const Guitarra = require("../models/guitarra")

const listAllGuitars = (req, res) => {
    Guitarra.find((err, guitarras) => {
        if (err) return res.send(err)
        if (guitarras.length == 0) return res.send("no hay data")
        console.log(guitarras)
        return res.send(guitarras)
    })
}

const saveGuitar = (req, res) => {
    let document = req.body;
    Guitarra.find({ "modelo": document.modelo, "marca": document.marca }, (err, guitarras) => {
        if(err) return res.send(err)
        if (guitarras.length > 0){
            res.send("el documento ya existe")
        }else {
            Guitarra.create(req.body).then((data) => {
                console.log(data)
                return res.send("Se creo el documento")

            }).catch(err => {
                console.log(err)
                return res.send("upss" + err)

            })
        }
    })
}

const updateGuitar =(req,res)=>{
    Guitarra.updateOne({"modelo": req.query.modelo, "marca": req.query.marca}, req.body,(err,mongoResponse)=>{
        if(err) return res.send(err)
        console.log(mongoResponse)
        return mongoResponse.modifiedCount==1? res.send("Documento actualizado"):res.send("No se actualizo datos iguales")
    });
}

const updatePriceGuitar = (req, res) => {
    if (req.body.precio) {
        Guitarra.updateOne({ "modelo": req.query.modelo, "marca": req.query.marca }, { "precio": req.body.precio }, (err, mongoResponse) => {
            if (err) return res.send(err)
            console.log(mongoResponse)
            return mongoResponse.modifiedCount == 1 ? res.send("Documento actualizado") : res.send("No se actualizo datos iguales")
        });
    }else{
        res.send("No se actualizao, no existe precio")
    }
}

const deleteGuitarra = (req,res) => {
    Guitarra.deleteOne({ "modelo": req.query.modelo, "marca": req.query.marca },(err,mongoResponse)=>{
        if(err) return res.send(err)
        console.log(mongoResponse)
        return mongoResponse.deletedCount == 1 ? res.send("Se eliminó el documento") : res.send("No se eliminó el documento")
    })
}

module.exports = {
    listAllGuitars,
    saveGuitar,
    updateGuitar,
    updatePriceGuitar,
    deleteGuitarra
}