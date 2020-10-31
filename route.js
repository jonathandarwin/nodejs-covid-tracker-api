const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/indonesia', (req, res) => {
    res.send({
        status : 1,
        message : 'OK',
        data : {
            death : 123,
            recovered : 456,
            positive : 789,
            lastUpdated : '2020-10-31 10:35:00'
        }        
    })
})

app.get('*', (req, res) => {
    res.send({
        status : 0,
        message : 'Not Found',
        data : null
    })
})

const PORT = process.env.PORT || 8888

app.listen(PORT, () => {
    console.log(`Listen to port : ${PORT}`)
})