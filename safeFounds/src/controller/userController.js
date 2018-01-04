const {User} = require('../model')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      // TODO - criar conta mt4
      res.send(user.toJSON())
    } catch (e) {
      res.status(400).send({
        error: 'This user already exist!: ' + e.message
      })
    }
  },
  async users (req, res) {
    try {
      const users = await User.findAll({
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
