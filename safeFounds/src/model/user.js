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
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    cpf: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING
    },
    password: DataTypes.STRING,
    telefone: {
      type: DataTypes.STRING
    },
    cameFrom: {
      type: DataTypes.STRING
    },
    situacao: {
      type: DataTypes.INTEGER
    },
    dataNac: {
      type: DataTypes.DATEONLY
    },
    agente: {
      type: DataTypes.STRING
    },
    comentarioAgente: {
      type: DataTypes.TEXT
    },
    logado: {
      type: DataTypes.BOOLEAN
    },
    codigoPromo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  return User
}
