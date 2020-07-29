'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartProduct.belongsTo(models.Cart,{foreignKey:'cartId'})
      CartProduct.belongsTo(models.Product,{foreignKey:'productId'})
    }
  };
  CartProduct.init({
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: {
      type:DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'CartProduct',
  });
  return CartProduct;
};