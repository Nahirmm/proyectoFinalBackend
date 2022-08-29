const AuthDaoClass = require('../daos/authDao')
const authDao = new AuthDaoClass()
const { createHash } = require('../utils/bcrypt')
const logger = require('../utils/winston')
const moment = require('moment')

class AuthService {
    constructor() {
        this.cart = []
    }

    static getInstance() {
        if(!instance) {
            instance = new AuthService()
        }
        return instance
    }

    async register(data) {
        try {
            if (!authDao.userExistsByEmail(data.email)) {
                const newUser = {
                    timestamp: moment().format('L LTS'),
                    name: data.name,
                    lastname: data.lastname,
                    phone: data.phone,
                    address: data.address,
                    email: data.email,
                    password: data.password
                }
                const userAdded = await authDao.register(newUser) 
                return userAdded
            } else {
                logger.warn("El usuario ya existe")
            }
            const { password } = data;
            const encryptedPassword = await bcrypt.hash(password, 10)
            const user = await AuthServices.authDAO.register({ ...data, password: encryptedPassword })
            await userEmail(user)
            return user

        } catch (error) {
            logger.error("Error en register-Services: " + error)
        }
    }

}

module.exports = AuthService