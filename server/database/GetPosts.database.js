const { Post } = require('../models/Post.model')
const { ImageInPost } = require('../models/ImageInPost.model')
const { VideoInPost } = require('../models/VideoInPost.model')


export const GetPosts = user_id => {
  const posts = await Post.findAll({ where: { user_id: user_id } })
    .then(posts => {
      let result = []
      for (post in posts) {
        const post_images = await ImageInPost.findAll({ where: { post_id: post.id } })
        const post_videos = await VideoInPost.findAll({ where: { post_id: post.id } })

        result.push({
          post,
          post_images,
          post_videos
        })
      }

      return result
    })
    .catch(e => {
      return e
    })
}