const AuthDaoClass = require('../daos/authDao')
const authDao = new AuthDaoClass()
const bcrypt = require('bcrypt')
const logger = require('../utils/winston')
const moment = require('moment')


class AuthService {
    constructor() {
        this.cart = []
    }

    async register(data) {
        try {
            const userExist = await authDao.userExistsByEmail(data.email)
            if (!userExist) {
                const newUser = {
                    timestamp: moment().format('L LTS'),
                    name: data.name,
                    lastname: data.lastname,
                    phone: data.phone,
                    address: data.address,
                    email: data.email,
                    password: bcrypt.hash(data.password, 10)
                }
                const userAdded = await authDao.register(newUser) 
                return userAdded
            } else {
                logger.warn("El usuario ya existe")
            }
        } catch (error) {
            logger.error("Error en register-Services: " + error)
        }
    }

    async login(data) {
        try {
            const { email, password } = data
            const user = await authDao.login(email, password)
            return user
        } catch (error) {
            logger.error("Error en login-Services: " + error)
        }
    }
}

module.exports = AuthService