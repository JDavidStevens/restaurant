require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use(express.static(`${__dirname}/../build`))

let {SERVER_PORT,CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
})

app.get('/api/menu', (req,res)=>{
    const dbInstance = req.app.get('db');

    dbInstance.menu().then(items=>{
        
        res.status(200).send(items)
    }).catch(err=>{
        res.status(500).send({errorMessage: "Oops! Something went wrong."});
        console.log(err)
    })
})

app.listen(SERVER_PORT, ()=>{
    console.log(`Server is listening on port ${SERVER_PORT}`)
})