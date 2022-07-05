let Prueba = require('../database/model/prueba')
let Producto = require('../database/model/producto')

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
    product : async (req, res)=>{
        try {
            let response = await Producto.find({}).populate('control', { name : 1, _id : 0})
            res.status(200).json({
                response
            })
            
        } catch (error) {
            console.error(error)
        }
    },

    find : async (req, res)=>{
        try {
            let response = await Prueba.find({_id : '62b615df3e86e6c44f3239fb'})
            res.status(200).send(`${response}`)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
        
    },

    create : async (req, res)=>{
        let { name, categoria, cantidad} = req.body
        
        let product = new Producto({
            name,
            cantidad,
            categoria
        })
        try {
            await product.save()
            res.status(200).json({
                msg : 'producto succesfelly created',
                data : product
            })
        } catch (error) {
            res.status(500).json({
                msg : error
            })
        }
    },

    delete : async (req, res)=>{
        let {id} = req.params

        try {
            let response = await Producto.deleteOne({ _id : id})
            res.status(200).json({
                response
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },
    update : async (req, res)=>{
        let {id} = req.params
        let {name, categoria, cantidad} = req.body

        try {
            let response = await Producto.updateOne({_id : id}, { name, categoria, cantidad})
            res.status(200).json({
                response
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },

    update2 : async (req, res)=>{
        let {id} = req.params
        let {name, categoria, cantidad} = req.body

        try {
            let response = await Producto.findByIdAndUpdate(id, { name, categoria, cantidad})
            res.status(200).json({
                response
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    }
}

module.exports= controller