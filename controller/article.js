const { Article, User } = require('../model');

class Articles {
    constructor () {
        this.getArticles = this.getArticles.bind(this);
        this.getFeedArticles = this.getFeedArticles.bind(this);
        this.getArticle = this.getArticle.bind(this);
        this.createArticle = this.createArticle.bind(this);
        this.updateArticle = this.updateArticle.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
        this.createArticleComment = this.createArticleComment.bind(this);
        this.getArticleComments = this.getArticleComments.bind(this);
        this.deleteArticleComment = this.deleteArticleComment.bind(this);
        this.favoriteArticle = this.favoriteArticle.bind(this);
        this.unfavoriteArticle = this.unfavoriteArticle.bind(this);
    }

    // 获取文章列表
    async getArticles (req, res, next) {
        try {
            const {
                limit = 10,
                offset = 0,
                tag,
                author,
            } = req.query;

            const filter = {};
            if (tag) {
                filter.tagList = tag;
            }

            if (author) {
                const user = await User.findOne({ username: author });

                filter.author = user ? user._id : null;
            }

            const article = await Article.find(filter)
                .populate('author', '-_id')
                .skip(Number.parseInt(offset)) // 跳过多少条
                .limit(Number.parseInt(limit)) // 取多少条
                .sort({
                    createdAt: -1,
                });

            const articlesCount = await Article.countDocuments();
            res.status(200).json({
                article,
                articlesCount,
            });
        } catch (error) {
            next(error);
        }
    }

    // 获取用户关注的作者文章列表
    async getFeedArticles (req, res, next) {
        try {
            const article = await Article.findById(req.params.articleId);

            if (!article) {
                return res.status(400).end();
            }

            res.status(200).json({
                article,
            });
        } catch (error) {
            next(error);
        }
    }

    // 获取文章
    async getArticle (req, res, next) {
        try {
            const article = await Article.findById(req.params.articleId).populate('author', '-_id');

            if (!article) {
                return res.status(400).end();
            }

            res.status(200).json({
                article,
            });
        } catch (error) {
            next(error);
        }
    }

    // 创建文章
    async createArticle (req, res, next) {
        try {
            const article = new Article(req.body.article);
            article.author = req.user._id;
            // article.populate('author').execPopulate();

            // first way
            // Article.findOne({ title: article.title }).populate('author').exec(function (err, articles) {
            //     if (err) {
            //         return res.status(400).json({
            //             error: 'User info is error',
            //         });
            //     }
            //     console.log(articles);
            // })

            // second way
            await article.save();

            const articles = await Article.findOne().populate('author', '-_id').exec();

            res.status(201).json({
                article: articles,
            });

            // third way
            // Article.findOne({}).populate('author').then(async (articles) => {
            //     console.log(articles);

            //     article.author = articles.author;
            //     res.status(201).json({
            //         article
            //     })
            // }).catch(err => {
            //     return res.status(400).json({
            //         error: 'User info is error',
            //     });
            // })
        } catch (error) {
            next(error);
        }
    }

    // 更新文章
    async updateArticle (req, res, next) {
        try {
            const article = req.article;
            const bodyArticle = req.body.article;
            article.title = bodyArticle.title || article.title;
            article.description = bodyArticle.description || article.description;
            article.body = bodyArticle.body || article.body;

            await article.save();

            res.status(200).json({
                article,
            });
        } catch (error) {
            next(error);
        }
    }

    // 删除文章
    async deleteArticle (req, res, next) {
        try {
            const article = req.article;

            await article.remove();

            res.status(204).end();
        } catch (error) {
            next(error);
        }
    }

    // 添加文章评论
    async createArticleComment (req, res, next) {
        try {
            res.send('post /:slug/comments');
        } catch (error) {
            next(error);
        }
    }

    // 获取文章的评论
    async getArticleComments (req, res, next) {
        try {
            res.send('get /:slug/comments');
        } catch (error) {
            next(error);
        }
    }

    // 删除文章的评论
    async deleteArticleComment (req, res, next) {
        try {
            res.send('delete /:slug/comments/:id');
        } catch (error) {
            next(error);
        }
    }

    // 文章点赞
    async favoriteArticle (req, res, next) {
        try {
            res.send('post /:slug/comments/favorite');
        } catch (error) {
            next(error);
        }
    }

    // 取消文章点赞
    async unfavoriteArticle (req, res, next) {
        try {
            res.send('delete /:slug/comments/favorite');
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new Articles();
