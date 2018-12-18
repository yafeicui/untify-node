let express = require('express');
let server = express();

// 获取post数据
let bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(function(req, res, next) {
  if (req.url.indexOf('/login') !== -1) {
    next();
  } else {
    if (req.headers.accesstoken !== 'aassddffgg') {
      // res.send({
      //   ret: -1,
      //   code: 401
      // });
      next();
    } else {
      next();
    }
  }
  // console.log(req.url);
});

// login
let loginUrl = require('./login.js');
server.use('/login', loginUrl);

// index
let indexUrl = require('./index.js');
server.use('/', indexUrl);

server.listen(8001, () => {
  console.log('弹屏开启服务');
});
