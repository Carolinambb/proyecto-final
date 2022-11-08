const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    description: {
      type: DataType.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,

    },
    rating: {
      type: DataTypes.FLOAT
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  })
}