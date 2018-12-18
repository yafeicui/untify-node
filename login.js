var express = require('express');
var router = express.Router();

router.get('/firework-backend/login', (req, res) => {
  let query = req.query;
  if (query.username === 'admin' && query.password === '123') {
    res.send({
      msg: '0',
      ret: 0,
      token: 'aassddffgg',
      sideBar: [
        { icon: 'user', name: '首页', path: '/page/home' },
        { icon: 'check', name: '审批', path: '/page/approve-manage' },
        { icon: 'tool', name: '设备管理', path: '/page/device' },
        { icon: 'key', name: '授权管理', path: '/page/author-manage' },
        { icon: 'file', name: '投放页', path: '/page/manage-put-page' }
      ],
      name: 'admin'
    });
  } else {
    res.send({
      ret: -1,
      message: '账号或密码不对'
    });
  }
});
router.get('/firework-backend/logout', (req, res) => {
  res.send({
    ret: 0,
    msg: '0'
  });
});
module.exports = router;
