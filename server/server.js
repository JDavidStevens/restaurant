require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use(express.static(`${__dirname}/../build`))

let {SERVER_PORT} = process.env;

// app.get('/api/menu', (req,res)=>{

// })

app.listen(SERVER_PORT, ()=>{
    console.log(`Server is listening on port ${SERVER_PORT}`)
})