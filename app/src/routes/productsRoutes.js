const express =  require('express')
const routesProducts = express.Router()

const prodControllers = require('../controllers/productsController')
const productsControllers = prodControllers.getInstance()

//RUTAS PRODUCTOS
routesProducts.get('/', productsControllers.getAllProducts)
routesProducts.get('/:id', productsControllers.getProductById)
routesProducts.post('/', productsControllers.addProduct)
routesProducts.put('/:id',  productsControllers.updateProduct)
routesProducts.delete('/:id',  productsControllers.deleteProduct)
//HACER
//routesProducts.get('/products/:category', productsControllers.getCategory)


module.exports = { routesProducts }