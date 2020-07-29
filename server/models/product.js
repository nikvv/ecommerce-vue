'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.CartProduct,{foreignKey:'productId'})
    }
  };
  Product.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args:true,
          msg:`Name cannot be empty!`
        },
        notNull:true,
      }
    },
    image_url: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl:true,
        notNull:true,
      }
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:`Price cannot be empty!`
        },
        isNumeric:{
          args:true,
          msg: `Price should be numeric!`
        },
        min:{
          args:[0],
          msg: `Price cannot be negative!`
        }
      }
    },
    stock: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:`Stock cannot be empty!`
        },
        isNumeric:{
          args:true,
          msg: `Stock should be numeric!`
        },
        min:{
          args:[0],
          msg: `Stock cannot be negative!`
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};