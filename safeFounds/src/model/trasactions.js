module.exports = (sequelize, DataTypes) => {
  const trs = sequelize.define('Transactions', {
    type: DataTypes.INTEGER,
    value: DataTypes.DOUBLE
  })

  return trs
}
