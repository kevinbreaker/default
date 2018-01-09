const userController = require('./controller/userController')
const adminController = require('./controller/adminController')

module.exports = (app) => {
  app.post('/register', userController.register)
  app.get('/users', userController.users)
  app.post('/admin', adminController.register)
}
