const { Post } = require('../models/Post.model')
const { ImageInPost } = require('../models/ImageInPost.model')
const { VideoInPost } = require('../models/VideoInPost.model')


export const EditPost = (post_id, text = "", images = [], videos = []) => {
  if (text != "") {
    await Post.update({ text: text }, { where: { post_id: post_id } })
  }
}