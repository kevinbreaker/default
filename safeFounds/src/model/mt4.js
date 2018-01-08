const promise = require('bluebird')
const bcrypt = promise.promisifyAll(require('bcrypt-nodejs'))
// const { User } = require('../model')

function hashPassword (user, options) {
  const SALT_FACTOR = 8
  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const mt4 = sequelize.define('mt4', {
    mt4Id: {
      type: DataTypes.INTEGER,
      unique: true
    },
    password: DataTypes.STRING
  },
  {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  // mt4.belongsTo(User)

  mt4.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  return mt4
}
