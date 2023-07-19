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
            'img' : 'https://mblogthumb-phinf.pstatic.net/20140114_194/gma_spiker_1389630854115pKu65_JPEG/%C5%E4%C0%CC4%C1%FD_-_A_NIGHT_IN_SEOUL.jpg?type=w2',
            'name' : 'heyoo807',
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