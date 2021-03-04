require(dotenv/config);
module.exports = {
    development: {
        databases: {
            rest: {
                database: process.env.POSTGRES_DB,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRESS_PASSWORD,
                host: process.env.POSTGRESS_HOST,
                port: process.env.POSTGRESS_PORT,
                dialect: 'postgres',
            }
        }
    },
    production: {
        databases: {
            rest: {
                database: process.env.POSTGRES_DB,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRESS_PASSWORD,
                host: process.env.POSTGRESS_HOST,
                port: process.env.POSTGRESS_PORT,
                dialect: 'postgres',
            }
        }
    }
}
