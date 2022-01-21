const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Country", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
      len: 3
      },
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    img: {
      type: DataTypes.STRING,
      isUrl: true,
      allowNull: false
    },

    continente: {
      type: DataTypes.STRING,
      allowNull: false
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },

    subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },

    area: {
      type: DataTypes.FLOAT,
      allowNull: true
    },

    poblacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },  
  },
  {timestamps: false},  // PARA NO AGREGAR  updated_at/created_at
  {freezeTableName: true,} //PARA QUE SEQUALIZE USE EL NOMBRE EN SINGULAR DE LA TABLA
  );
};
