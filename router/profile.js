const express = require('express')

const router = express.Router();

// 获取指定用户的资料
router.get('/:username', async (req, res, next) => {
    try {
        res.send('get /profiles/:username')
    } catch (error) {
        next(error)
    }
})

// 关注用户
router.post('/:username/follow', async (req, res, next) => {
    try {
        res.send('post /profiles/:username/follow')
    } catch (error) {
        next(error)
    }
})

// 取消关注
router.delete('/:username/follow', async (req, res, next) => {
    try {
        res.send('delete /profiles/:username/follow')
    } catch (error) {
        next(error)
    }
})

// 更新当前登录用户
router.put('/user', async (req, res, next) => {
    try {
        res.send('put  /user')
    } catch (error) {
        next(error)
    }
})

module.exports = router;