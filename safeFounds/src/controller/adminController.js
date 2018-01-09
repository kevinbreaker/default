const {admin} = require('../model')

module.exports = {
  async register (req, res) {
    try {
      const Admin = await admin.create(req.body)
      // TODO - criar conta mt4
      res.send(Admin.toJSON())
    } catch (e) {
      res.status(400).send({
        error: 'This user already exist!: ' + e.message
      })
    }
  }
}
