const mongoose = require('mongoose');
const { dbUri } = require('../config/config.default');

main().catch((err) => {
    console.log('MongoDB 数据库连接失败', err);
});

async function main () {
    await mongoose.connect(dbUri);
    console.log('数据库连接成功');
}

// 组织导出模型类
module.exports = {
    User: mongoose.model('User', require('./user')),
    Article: mongoose.model('Article', require('./article')),
};
