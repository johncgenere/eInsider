module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      /*id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },*/
      username: { 
        type: DataTypes.STRING, 
        unique: true,
        allowNull: false 
      },
      password: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      lol: { 
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      dota2: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      csgo: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      ow: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: false
    }
  );

  return User;
};
