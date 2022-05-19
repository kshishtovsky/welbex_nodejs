const { DataTypes } = require('sequelize')
const { sequelize } = require('../sequelize_init')


export const VideoInPost = sequelize.define('posts_videos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  video_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})