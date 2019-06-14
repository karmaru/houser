// this is the server side version of import
const express = require('express')
// this allows connection to database
const massive = require('massive')


// allows the use of .env
require('dotenv').config()

const houseCtrl = require('./controller')

// invokes express
const app = express()

app.use(express.json())

let {SERVER_PORT, CONNECTION_STRING} = process.env

// this connects to the db with a Promise...
massive(CONNECTION_STRING).then(db => {
    console.log('db is connected')
    // console.log(1111, db)
    app.set('db', db)
})

app.get('/api/houses', houseCtrl.read)
app.post('/api/houses', houseCtrl.create)
app.delete('/api/houses/:id', houseCtrl.delete);
// app.put('/api/national_parks/:id', NPC.update)
// app.delete('/api/national_parks/:id', NPC.delete)

app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT))