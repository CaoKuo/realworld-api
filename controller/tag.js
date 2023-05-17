class Tags {
    constructor () {
        this.getTags = this.getTags.bind(this);
    }

    // 获取标签列表
    async getTags (req, res, next) {
        try {
            // 处理请求
            res.send('getTags');
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new Tags();
