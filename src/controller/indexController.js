let Prueba = require('../database/model/prueba')

let controller = {
    index : async (req, res)=>{
        let prueba = new Prueba({
            name : "Marcos"
        })
        try {
            let response = await prueba.save()
            console.log(response)
            res.status(200).send(`"Index App Express" ${response}`)
        } catch (error) {
            console.error(error)
        }
    },

    find : async (req, res)=>{
        try {
            let response = await Prueba.find({})
            res.status(200).send(`${response}`)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
        
    }
}

module.exports= controller