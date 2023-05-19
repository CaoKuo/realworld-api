const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.sign = promisify(jwt.sign);

exports.verify = promisify(jwt.verify);

exports.decode = promisify(jwt.decode);

// 生成jwt
// jwt.sign({
//     foo: 'bar'
// }, 'dndndndndn', (err, token) => {
//     if(err) {
//         console.log('生成 token 失败')
//     }
//     console.log(token)
// })

// 验证jwt
// jwt.verify
