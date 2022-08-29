const ChatService = require('../services/chatServices')
const chatServiceNew = new ChatService()

class chatControllers {

    async getAllMessages(req, res) {
        try {
            const allMessages = await chatServiceNew.getAllMessages()
            res.status(200).json(allMessages)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async getMessagesByUser(req, res) {
        try {
            const user = req.params.id
            const userMessages = await chatServiceNew.getMessagesByUser(user)
            res.status(200).json(userMessages)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async saveMessages(req, res) {
        try {
            const newUser = await authServiceNew.register(req.body) 
            res.status(200).json(newUser)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = chatControllers