module.exports = {
    development: {
        database: {
            host: '',
            port: 3306,
            name: '',
            dialect: 'mysql',
            user: '',
            password: ''
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
