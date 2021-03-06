const promise = require('bluebird')
const bcrypt = promise.promisifyAll(require('bcrypt-nodejs'))
// const trs = require('./trasactions')

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
  const Admin = sequelize.define('user_admin', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nivelAcesso: DataTypes.INTEGER
  },
  {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  Admin.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  return Admin
}
