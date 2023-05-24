const { body } = require('express-validator');
// const { Article } = require('../model');
const validate = require('../middleware/validate');
// const  mongoose = require('mongoose');
const { Article } = require('../model');

exports.createArticle = validate([
    body('article.title').notEmpty().withMessage('文章标题不能为空'),

    body('article.description').notEmpty().withMessage('文章摘要不能为空'),

    body('article.body').notEmpty().withMessage('文章内容不能为空'),
]);

// const getArticle = validate([
//     param('articleId')
//         .notEmpty().withMessage('文章ID有误')
//         .custom(async value => {
//             if(!mongoose.isValidObjectId(value)) {
//                 return Promise.reject('文章ID有误')
//             }
//         })
// ])

exports.getArticle = validate([
    validate.isValidObjectId(['params'], 'articleId'),
]);

exports.updateArticle = [
    validate([
        validate.isValidObjectId(['params'], 'articleId'),
    ]),
    async (req, res, next) => {
        const articleId = req.params.articleId;
        const article = await Article.findById(articleId);
        req.article = article;
        if (!article) {
            return res.status(404).end();
        }
        next();
    },
    async (req, res, next) => {
        if (req.user._id.toString() !== req.article.author.toString()) {
            return res.status(403).end();
        }
        next();
    },
];

exports.deleteArticle = exports.updateArticle;
