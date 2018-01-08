const config = require('../config/config')
const Sequelize = require('sequelize')

const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

db.sequelize = sequelize
db.Sequelize = Sequelize

db.user = require('./user')(sequelize, Sequelize)
db.trs = require('./trasactions')(sequelize, Sequelize)
db.mt4 = require('./mt4')(sequelize, Sequelize)
db.admin = require('./admin')(sequelize, Sequelize)

// relations
db.trs.belongsTo(db.user, {
  foreignKey: 'user_id'
})

db.trs.belongsTo(db.admin, {
  foreignKey: 'admin_id'
})

module.exports = db
