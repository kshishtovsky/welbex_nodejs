const { DataTypes } = require('sequelize')
const { sequelize } = require('../sequelize_init')


export const ImageInPost = sequelize.define('posts_images', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})