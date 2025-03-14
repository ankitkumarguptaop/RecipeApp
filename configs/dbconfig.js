const dotenv =require("dotenv")
dotenv.config()

module.exports={
  "development": {
    "username": process.env.DB_USER_NAME,
    "password":  process.env.DB_PASSWORD,
    "database": "recipe",
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_TYPE,
    

  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
