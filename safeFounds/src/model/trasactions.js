module.exports = (sequelize, DataTypes) => {
  const trs = sequelize.define('Transactions', {
    tipo: { type: DataTypes.INTEGER },
    valor: {
      type: DataTypes.DOUBLE
    }
  })

  return trs
}
