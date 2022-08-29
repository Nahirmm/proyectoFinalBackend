const AuthDaoClass = require('../daos/authDao')
const authDao = new AuthDaoClass()
const { createHash } = require('../utils/bcrypt')
const logger = require('../utils/winston')
const moment = require('moment')
let instance = null

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
            const userExist = await authDao.userExistsByEmail(data.email)
            if (!userExist) {
                const newUser = {
                    timestamp: moment().format('L LTS'),
                    name: data.name,
                    lastname: data.lastname,
                    phone: data.phone,
                    address: data.address,
                    email: data.email,
                    password: createHash(data.password)
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

    async login(email, password) {
        try {
            
        } catch (error) {
            
        }
    }

}

module.exports = AuthService