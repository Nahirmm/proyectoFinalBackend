const containerProducts = require('../services/productsServices')
const newContainerProducts = containerProducts.getInstance()
let instance = null

class productsControllers {

    static getInstance() {
        if(!instance) {
            instance = new productsControllers()
        }
        return instance
    }

    async getAllProducts(req, res) {
        try {
            const allProducts =  await newContainerProducts.getAllProducts()
            res.status(200).json(allProducts)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async getProductById(req, res) {
        try {
            const productById = await newContainerProducts.getByIdProduct(req.params.id)
            if (productById != undefined) {
                return res.status(200).json(productById)
            } else {
                return res.status(404).json({ error : 'Producto no encontrado' })
            }
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async addProduct(req, res) {
        try {
            const newProduct = await newContainerProducts.saveProduct(req.body) 
            res.status(200).json(newProduct)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async updateProduct(req, res) {
        try {
            const updateP = await newContainerProducts.updateProduct(req.params.id, req.body)
            res.status(200).json(updateP)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async deleteProduct(req, res) {
        try {
            const deleteP = await newContainerProducts.deleteProduct(req.params.id)
            res.status(200).json(deleteP)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async getProductsByCategory(req, res) {
        try {
            const productsByCategory = await newContainerProducts.getProductsByCategory(req.params.category)
            if (productsByCategory != undefined) {
                return res.status(200).json(productsByCategory)
            } else {
                return res.status(404).json({ error : 'Categoria no encontrada' })
            }
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}


module.exports = productsControllers