const express = require('express')
const Tags = require('../controller/tag')

const router = express.Router();

// 获取标签列表
router.get('/', Tags.getTags)

module.exports = router;