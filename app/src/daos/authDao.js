const { UserModel } = require ('../models/userModel')
const logger = require('../utils/winston')
let instance = null

class AuthDaoClass {

    static getInstance() {
        if(!instance) {
            instance = new AuthDaoClass()
        }
        return instance
    }

    async userExistsByEmail(email) {
        try {
            const emailUser = await UserModel.findOne({email})
            return (emailUser != undefined)
        } catch (error) {
            logger.error("Error in userExists-DAO: " + error)
        }
    }

    async register(data) {
        try {
            const user = await UserModel.create(data);
            return user;
        } catch (error) {
            logger.error("Error in register-DAO: " + error)
        }
    }

}

module.exports = AuthDaoClass