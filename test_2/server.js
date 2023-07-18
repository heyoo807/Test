const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extendend: true}))

app.get('/api/customers', (req, res)=>{
    res.send([
        {
            'id' : 1,
            'img' : '',
            'name' : 'heyoo',
            'birthday' : '020807',
            'gender' : '여자',
            'job' : '대학생'
          },
          {
            'id' : 2,
            'img' : '',
            'name' : '김사과',
            'birthday' : '020807',
            'gender' : '여자',
            'job' : '대학생'
          },
          {
            'id' : 3,
            'img' : '',
            'name' : '반하나',
            'birthday' : '020807',
            'gender' : '여자',
            'job' : '대학생'
          }
          
    ])
})

app.listen(port, ()=> console.log(`listening on port ${port}`))