module.exports = {
  port: process.env.PORT || 3360,
  db: {
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'safeFounds',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      storage: './safe.mysql'
    }
  }
}
