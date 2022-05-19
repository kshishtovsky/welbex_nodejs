const { Post } = require('../models/Post.model')
const { ImageInPost } = require('../models/ImageInPost.model')
const { VideoInPost } = require('../models/VideoInPost.model')


export const CreatePost = (user_id, text, images, videos) => {
  const post = await Post.create({
    user_id: user_id,
    text: text
  })
    .then(() => {
      const post_id = await Post.findAll({
        limit: 1,
        where: {
          user_id: user_id,
        },
        order: [['createdAt', 'DESC']],
      })
        .then(post_id => {
          for (image_url in images) {
            const images = await ImageInPost.create({
              post_id: post_id[0],
              image_url: image_url
            })
          }

          for (video_url in videos) {
            const videos = await VideoInPost.create({
              post_id: post_id,
              video_url: video_url
            })
          }

          return { 'status': 'success' }
        })
        .catch(e => {
          return e
        })
    })
    .catch(e => {
      return e
    })
}