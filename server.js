//Dependencies 

require('dotenv').config();
const express = require('express')
const morgan = require("morgan")
const cors = require('cors')

const app = express()

//Middleware
app.use(cors())
app.use(morgan())
app.use(express.json())

//Routes

app.get('/', (req, res) => {
    res.send('hello world')
})
//Listener
app.listen(9001, () => console.log(`listening on Daniel's Favorite Port, one over 9000`))