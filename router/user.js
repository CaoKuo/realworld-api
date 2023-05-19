const express = require('express');
const Users = require('../controller/user');
const userValidator = require('../validator/user');
const auth = require('../middleware/auth');

const router = express.Router();

// 用户登录
router.post('/users/login', userValidator.login, Users.login);

// 用户注册
router.post('/users', userValidator.register, Users.register);

// 获取当前登录用户
router.get('/user', auth, Users.getCurrentUser);

// 更新当前登录用户
router.put('/user', auth, Users.updateCurrentUser);

module.exports = router;
