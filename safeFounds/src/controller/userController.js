const {user} = require('../model')

module.exports = {
  async register (req, res) {
    try {
      const User = await user.create(req.body)
      // TODO - criar conta mt4
      res.send(User.toJSON())
    } catch (e) {
      res.status(400).send({
        error: 'This user already exist!: ' + e.message
      })
    }
  },
  async users (req, res) {
    try {
      const users = await user.findAll({
        limit: 20
      })
      res.send(users)
    } catch (e) {
      // statements
      res.status(500).send({
        error: 'an error has occurred trying to fetch the users: ' + e.message
      })
    }
  }
}
