const express = require('express')
const mysql = require('mysql2');
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
var connection = mysql.createConnection({
  host: '192.168.15.6',
  user: 'Eduard',
  database: 'teste',
  password:'Eduardo1993*'
});

// app.get('/user', (req, res) => {
//   res.send('Hello World!')
// })

app.post('/user', (req, res) => {
  const name = req.body.name
  console.log(name)
  connection.query('INSERT INTO table1 (name) VALUES (?)',
  [name],
  (err,result)=>{
    if (err){
      console.log(err)
    }else{
      console.log('added name')
    }
  })
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})