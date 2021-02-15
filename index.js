const express = require('express')
const app = express()
const port = 5000
const bodyparser = require('body-parser');
const { User } = require("./models/User");

//application/x-www-from-urlencoded
app.use(bodyparser.urlencoded({extended: true})); //body-parser 옵션(application/x-www-from-urlencoded 타입을 분석하여 가져오기위한 옵션)
//application/json
app.use(bodyparser.json()); //body-parser 옵션(json타입을 분석해서 가져오기 위한 옵션)

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ppas1515:sla38538285@chultube.vrquv.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MonfoDB Connected..'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 여긴 내구역!')
})

app.post('/register', (req,res) =>{  //endpoint가 /register이다.
     //회원가입할때 필요한 정보를 client에서 가져오면
      //그것들을 데이터베이스에 넣어준다.
      
      const user = new User(req.body)

      user.save((err,userInfo)=>{ //user model에 저장한후 (콜백)
        if(err) return res.json({ success: false, err}) //오류가 있다면 클라이언트에 전달
        return res.status(200).json({
          success: true
        })
      }) //save는 mongoDB에서 온 메소드
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}!`)
});