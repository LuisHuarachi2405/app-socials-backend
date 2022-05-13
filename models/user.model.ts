const { DataTypes } = require('sequelize');
import db from "../db/connection";

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  tableName: 'users'
});

export default User