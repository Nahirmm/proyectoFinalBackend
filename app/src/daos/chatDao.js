const { MessageModel } = require ('../models/messageModel')
const logger = require('../utils/winston')


class ChatDao {

    async getAllMessages() {
        try {
            const messages = await MessageModel.find({})
            return messages
        } catch (error) {
            logger.error("Error in getAllMessages-DAO: " + error)
        }
    }

    async getMessagesByUser(email) {
        try {
            const messagesUser = await MessageModel.find({email})
            return messagesUser
        } catch (error) {
            logger.error("Error in getMessagesByUser-DAO: " + error)
        }  
    }

    async saveMessages(message){
        try {
            const saveMessage = await MessageModel(message).save()
            return saveMessage
        } catch (error) {
            logger.error("Error in saveMessages-DAO: " + error)
        }
    }

}

module.exports = ChatDao