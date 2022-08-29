const express =  require('express')
const routesChat = express.Router()

const chatControllers = require('../controllers/chatController')
const chatController = new chatControllers()
const authControllers = require('../controllers/authController')
const authController = new authControllers()


routesChat.get('/', chatController.getAllMessages)
routesChat.get('/:email', chatController.getMessagesByUser)
routesChat.post('/', chatController.saveMessages)

module.exports = { routesChat }