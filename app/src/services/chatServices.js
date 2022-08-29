const ChatDao = require('../daos/chatDao')
const chatDaoNew = new ChatDao()
const AuthDaoClass = require('../daos/authDao')
const authDao = new AuthDaoClass()
const logger = require('../utils/winston')

class ChatService {

    async getAllMessages() {
        try {
            const allMessages = await chatDaoNew.getAllMessages()
            if (allMessages.length > 0) {
                return allMessages
            } else {
                logger.warn("No existen mensajes")
                return null
            }
        } catch (error) {
            logger.error("Error en getAllMessages-Services: " + error)
        }
    }

    async getMessagesByUser(email) {
        try {
            const user = await authDao.userExistsByEmail(email)
            if (user) {
                const userMessages = await chatDaoNew.getMessagesByUser(email)
                if (userMessages.length > 0) {
                    return userMessages
                } else {
                    logger.warn("No existen mensajes para este usuario")
                }
            } else {
                logger.warn("No existe el usuario")
            }
        } catch (error) {
            logger.error("Error en getMessagesByUser-Services: " + error)
        }
    }

    async saveMessages() {
        try {
            //HACER (jwt)
        } catch (error) {
            logger.error("Error en saveMessages-Services: " + error)
        }
    }

}

module.exports = ChatService