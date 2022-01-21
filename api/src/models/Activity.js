const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        dificultad:{
          type: DataTypes.STRING
        },
        duracion:{
          type: DataTypes.STRING
        },
        temporada:{
            type: DataTypes.STRING
        },
      },
      {timestamps: false}, // PARA NO AGREGAR  updated_at/created_at
      {freezeTableName: true,} //PARA QUE SEQUALIZE USE EL NOMBRE EN SINGULAR DE LA TABLA
    );
};