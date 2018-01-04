const userController = require('./controller/userController')

module.exports = (app) => {
  app.post('/register', userController.register)
  app.get('/users', userController.users)
}
