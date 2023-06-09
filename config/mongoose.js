const mongoose = require('mongoose')
if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

//設定連線到mongoDB
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true })
//取得資料庫連線狀態
const db = mongoose.connection
//連線異常
db.on('err', () => {
  console.log('mongodb err', err.message)
})
//連線成功
db.once('open', () => {
  console.log('mongodb success')
})

module.exports = db