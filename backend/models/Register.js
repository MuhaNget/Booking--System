"use strict";

module.exports = (sequelize, DataTypes) => {
  const Register = sequelize.define(
    "register",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        defaultValue: 1,
      },
      fName: { type: DataTypes.STRING, allowNull: true },
      lName: { type: DataTypes.STRING, allowNull: true },
      mName: { type: DataTypes.STRING, allowNull: true },
      email: { type: DataTypes.STRING, allowNull: true },
      gender: { type: DataTypes.STRING, allowNull: true },
      password: { type: DataTypes.STRING, allowNull: true },
    },
    { freezeTableName: true, timestamps: true }
  );
  // Register.sync({ alter: true });
  return Register;
};
