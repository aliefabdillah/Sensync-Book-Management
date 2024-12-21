// eslint-disable-next-line import/no-extraneous-dependencies
import { DataTypes } from 'sequelize';
import db from '../config/db.config.js';

// export default (sequelize, DataTypes) => {
//   class Books extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Books.init({
//     id: DataTypes.STRING,
//     title: DataTypes.STRING,
//     author: DataTypes.STRING,
//     year: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'Books',
//     timestamps: true,
//   });
//   return Books;
// };

export const Books = db.define('Books', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
}, {
  timestamps: true,
})