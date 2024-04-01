const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', 
  {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      surename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      description: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
      image: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
      nationality:{
      type: DataTypes.STRING,
      //allowNull: false, 
    },
      birthday:{
      type: DataTypes.DATE,
      //allowNull: false, 
    },
    created:{
      type: DataTypes.BOOLEAN,
      //allowNull: true, 
    }, 
  },
      {timestamps: false}
  );
};