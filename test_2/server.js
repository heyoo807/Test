const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000
const fs  = require('fs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extendend: true}))


const data = fs.readFileSync('./database.json')
const conf = JSON.parse(data)
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password : conf.password,
  port : conf.port,
  database : conf.database
}) 
connection.connect()

const multer = require('multer')
const upload = multer({dest: './upload'})

app.get('/api/customers', (req, res)=>{
    connection.query(
      "SELECT * FROM CUSTOMER",
      (err, rows,fields)=>{
        res.send(rows)
      }
    )
})

app.use('/image', express.static('./upload'))
app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)'
  let image = '/image/' + req.file.filename;
  let name = req.body.name
  let name = req.body.name
  let name = req.body.name
  let name = req.body.name
  let name = req.body.name
})

app.listen(port, ()=> console.log(`listening on port ${port}`))