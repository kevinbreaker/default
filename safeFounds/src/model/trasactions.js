module.exports = (sequelize, DataTypes) => {
  const trs = sequelize.define('transactions', {
    tipo: { type: DataTypes.INTEGER },
    valor: { type: DataTypes.DOUBLE }
  })

  return trs
}
