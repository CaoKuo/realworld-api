const express = require('express')
const Users = require('../controller/user')
const userValidator = require('../validator/user')

const router = express.Router();

// 用户登录
router.post('/users/login', userValidator.login, Users.login)

// 用户注册
router.post('/users', userValidator.register, Users.register)

// 获取当前登录用户
router.get('/user', Users.getCurrentUser)

// 更新当前登录用户
router.put('/user', Users.updateCurrentUser)

module.exports = router;