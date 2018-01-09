const {user} = require('../model')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSingUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const User = await user.create(req.body)
      // TODO - criar conta mt4
      res.send({
        user: User.toJSON(),
        token: jwtSingUser(User.toJSON())
      })
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
