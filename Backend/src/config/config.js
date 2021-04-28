module.exports = {
    development: {
        database: {
<<<<<<< HEAD
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
            user: process.env.DB_USER,
            password: process.env.DB_PASS
=======
            host: '',
            port: 3306,
            name: '',
            dialect: 'mysql',
            user: '',
            password: ''
>>>>>>> b3ebcf85ceb277d10c5a4dc7c5aa9658cfe46d0f
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
