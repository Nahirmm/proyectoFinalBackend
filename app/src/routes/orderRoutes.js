const express =  require('express')
const routesOrder = express.Router()

const OrderController = require('../controllers/orderController')
const orderController = new OrderController()

const {verifyUserToken} = require('../middleware/tokenLogin')

// // Import Middlewares
// import  {verifyTokenUser} from "../middlewares/tokenAuth"; // valida jwt Token
// import { idValid } from "../middlewares/mongoIDValid"; // mongoId 24 caracteres
// import fieldsValidator from "../middlewares/fieldsValidator"; 
// import { orderCartID } from "../rules/order.Rules";


// orderRoutes.post('/', orderCartID(), fieldsValidator, verifyUserToken, orderController.generateOrder);
// orderRoutes.get('/', verifyTokenUser, orderController.getAllOrders);
// orderRoutes.get('/:id', idValid, orderController.getOrderByID);
// orderRoutes.get('/myorders/user', orderController.getOrdersByUser);



routesOrder.post('/', verifyUserToken, orderController.generateOrder)
routesOrder.post('/', verifyUserToken, orderController.getAllOrders)


module.exports = { routesOrder }