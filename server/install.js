// const express = require('express')
// const path = require('path')
// const http = require('http')
const mysql = require('mysql')
// const reload = require('reload')
// const ejs = require('ejs')
// const port = process.env.PORT || 9000
// const app = express()
// const server = http.createServer(app)

/*-------------------------------------------
Create connection
-------------------------------------------*/
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mg-vue-project'
});

/*-------------------------------------------
Connect DB
-------------------------------------------*/
db.connect(err => {
  if(err){ throw err }
});

/*-------------------------------------------
Create DB
-------------------------------------------*/
const db_tables = require('./db/db_tables.js')
new Promise(function(resolve, reject) {
  console.log('------------------------------');
  console.log('Start...')
  console.log('');
  resolve()
})
  .then(stat => {
    db_tables(db, result => {
      if(result === 'end'){
        console.log('');
        console.log('Fnish');
        console.log('------------------------------');
        db.end();
      }
    })
  })
  .catch(err => { console.error(err) })


/*-------------------------------------------
Server Listen
-------------------------------------------*/
// server.listen(port, () => {
//   console.log(`Start installing Database`)
//   server.close()
// })
