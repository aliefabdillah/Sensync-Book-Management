// eslint-disable-next-line import/no-extraneous-dependencies
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Books.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};
