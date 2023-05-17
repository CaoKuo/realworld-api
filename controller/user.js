const { User } = require('../model');

class Users {
    constructor () {
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.getCurrentUser = this.getCurrentUser.bind(this);
        this.updateCurrentUser = this.updateCurrentUser.bind(this);
        this.getUserProfile = this.getUserProfile.bind(this);
        this.followUser = this.followUser.bind(this);
        this.unfollowUser = this.unfollowUser.bind(this);
    }

    // 用户登录
    async login (req, res, next) {
        try {
            res.send('post /users/login');
        } catch (error) {
            next(error);
        }
    }

    // 用户注册
    async register (req, res, next) {
        try {
            let user = new User(req.body.user);

            await user.save();

            // 清楚password
            user = user.toJSON();
            delete user.password;

            res.status(201).json({
                user,
            });
        } catch (error) {
            next(error);
        }
    }

    // 获取当前登录用户
    async getCurrentUser (req, res, next) {
        try {
            res.send('get /user');
        } catch (error) {
            next(error);
        }
    }

    // 更新当前登录用户
    async updateCurrentUser (req, res, next) {
        try {
            res.send('update /user');
        } catch (error) {
            next(error);
        }
    }

    // 获取指定用户资料
    async getUserProfile (req, res, next) {
        try {
        // 处理请求
            res.send('getUserProfile');
        } catch (err) {
            next(err);
        }
    }

    // 关注用户
    async followUser (req, res, next) {
        try {
        // 处理请求
            res.send('followUser');
        } catch (err) {
            next(err);
        }
    }

    // 取消关注用户
    async unfollowUser (req, res, next) {
        try {
        // 处理请求
            res.send('unfollowUser');
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new Users();
