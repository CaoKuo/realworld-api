class Articles {
    constructor() {
        this.getArticles = this.getArticles.bind(this)
        this.getFeedArticles = this.getFeedArticles.bind(this)
        this.getArticle = this.getArticle.bind(this)
        this.createArticle = this.createArticle.bind(this)
        this.updateArticle = this.updateArticle.bind(this)
        this.deleteArticle = this.deleteArticle.bind(this)
        this.createArticleComment = this.createArticleComment.bind(this)
        this.getArticleComments = this.getArticleComments.bind(this)
        this.deleteArticleComment = this.deleteArticleComment.bind(this)
        this.favoriteArticle = this.favoriteArticle.bind(this)
        this.unfavoriteArticle = this.unfavoriteArticle.bind(this)
    }
    // 获取文章列表
    async getArticles(req, res, next) {
        try {
            res.send('get /')
        } catch (error) {
            next(error)
        }
    }

    // 获取用户关注的作者文章列表
    async getFeedArticles(req, res, next) {
        try {
            res.send('get /feed')
        } catch (error) {
            next(error)
        }
    }

    // 获取文章
    async getArticle(req, res, next) {
        try {
            res.send('get /:slug')
        } catch (error) {
            next(error)
        }
    }

    // 创建文章
    async createArticle(req, res, next) {
        try {
            res.send('post /')
        } catch (error) {
            next(error)
        }
    }

    // 更新文章
    async updateArticle(req, res, next) {
        try {
            res.send('put /:slug')
        } catch (error) {
            next(error)
        }
    }

    // 删除文章
    async deleteArticle(req, res, next) {
        try {
            res.send('delete /:slug')
        } catch (error) {
            next(error)
        }
    }

    // 添加文章评论
    async createArticleComment(req, res, next) {
        try {
            res.send('post /:slug/comments')
        } catch (error) {
            next(error)
        }
    }

    // 获取文章的评论
    async getArticleComments(req, res, next) {
        try {
            res.send('get /:slug/comments')
        } catch (error) {
            next(error)
        }
    }

    // 删除文章的评论
    async deleteArticleComment(req, res, next) {
        try {
            res.send('delete /:slug/comments/:id')
        } catch (error) {
            next(error)
        }
    }

    // 文章点赞
    async favoriteArticle(req, res, next) {
        try {
            res.send('post /:slug/comments/favorite')
        } catch (error) {
            next(error)
        }
    }

    // 取消文章点赞
    async unfavoriteArticle(req, res, next) {
        try {
            res.send('delete /:slug/comments/favorite')
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new Articles()