const express = require('express');
const Articles = require('../controller/article');
const auth = require('../middleware/auth');
const articleValidator = require('../validator/article');

const router = express.Router();

// 获取文章列表
router.get('/', Articles.getArticles);

// 获取用户关注的作者文章列表
router.get('/feed', Articles.getFeedArticles);

// 获取文章
router.get('/:articleId', articleValidator.getArticle, Articles.getArticle);

// 创建文章
router.post('/', auth, articleValidator.createArticle, Articles.createArticle);

// 更新文章
router.put('/:articleId', auth, articleValidator.updateArticle, Articles.updateArticle);

// 删除文章
router.delete('/:articleId', auth, articleValidator.deleteArticle, Articles.deleteArticle);

// 添加文章评论
router.post('/:articleId/comments', Articles.createArticleComment);

// 获取文章的评论
router.get('/:articleId/comments', Articles.getArticleComments);

// 删除文章的评论
router.delete('/:articleId/comments/:id', Articles.deleteArticleComment);

// 文章点赞
router.post('/:articleId/favorite', Articles.favoriteArticle);

// 取消文章点赞
router.delete('/:articleId/favorite', Articles.unfavoriteArticle);

module.exports = router;
