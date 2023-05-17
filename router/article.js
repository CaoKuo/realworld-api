const express = require('express')
const Articles = require('../controller/article')

const router = express.Router();

// 获取文章列表
router.get('/', Articles.getArticles)

// 获取用户关注的作者文章列表
router.get('/feed', Articles.getFeedArticles)

// 获取文章
router.get('/:slug', Articles.getArticle)

// 创建文章
router.post('/', Articles.createArticle)

// 更新文章
router.put('/:slug', Articles.updateArticle)

// 删除文章
router.delete('/:slug', Articles.deleteArticle)

// 添加文章评论
router.post('/:slug/comments', Articles.createArticleComment)

// 获取文章的评论
router.get('/:slug/comments', Articles.getArticleComments)

// 删除文章的评论
router.delete('/:slug/comments/:id', Articles.deleteArticleComment)

// 文章点赞
router.post('/:slug/favorite', Articles.favoriteArticle)

// 取消文章点赞
router.delete('/:slug/favorite', Articles.unfavoriteArticle)

module.exports = router;