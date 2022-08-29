const AuthService = require('../services/authServices')
const authServiceNew = AuthService.getInstance()
let instance = null

class authControllers {

    static getInstance() {
        if(!instance) {
            instance = new authControllers()
        }
        return instance
    }

    async register(req, res) {
        try {
            const newUser = await authServiceNew.register(req.body) 
            res.status(200).json(newUser)
        }catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = authControllers