'use strict';
const {
  Model
} = require('sequelize');
const { encrypt } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Cart,{foreignKey:'userId'})
    }
  };
  User.init({
    username: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:`Username cannot be empty!`
        },
        notNull:true,
      },
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:`Email cannot be empty!`
        },
        isEmail:{
          args:true,
          msg:'Email should be in @mail format!'
        },
        notNull:true,
      },
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:`Password cannot be empty!`
        },
        notNull:true,
      },
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    hooks:{
      beforeCreate: (user) => {
        user.password = encrypt(user.password)
        if(user.role === undefined || user.role === ''){
          user.role = "user"
        }
      }
    },
    modelName: 'User',
  });
  return User;
};