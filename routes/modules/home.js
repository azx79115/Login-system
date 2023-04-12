const express = require('express');
const router = express.Router();
const User = require('../../models/User')

//首頁
router.get('/',  (req, res) => {
  res.render('index')
});

//接收/login傳送過來的表單
router.post('/', (req, res) => {
  const { email, password: pwd } = req.body
  console.log(req.body)
  const errEmail = 'Your email is not registered.'
  const errPwd = 'Your password is wrong'
  //在資料庫中搜尋信箱
  User.findOne({ email })
    .lean()
    .then(data => {
      if( data === null) {
        return res.render('index', { errEmail, email })//未找到顯示未註冊
      }
      if(data.password === pwd) {
        return res.render('user')
      } else {
        return res.render('index', { errPwd, email })
      }
    })
})

//註冊按鈕路由
router.get('/register', (req, res) => {
  res.render('new')
})


module.exports = router;
