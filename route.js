const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({
        status : 1,
        message : 'OK',
        data : {
            death : 1234,
            recovered : 4567,
            positive : 7890,
            lastUpdated : '2020-10-31 10:35:00'
        }        
    })
})

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

app.get('/indonesia/province', (req, res) => {
    const listProvince = []
    listProvince.push({
        name : 'Jakarta',
        death : 12,
        recovered : 45,
        positive : 78,
        lastUpdated : '2020-10-31 10:35:00'
    })

    listProvince.push({
        name : 'Jawa Barat',
        death : 1,
        recovered : 4,
        positive : 7,
        lastUpdated : '2020-10-31 10:35:00'
    })

    res.send({
        status : 1,
        message : 'OK',
        data : listProvince
    })
})

app.get('*', (req, res) => {
    res.send({
        status : 0,
        message : 'Not Found',
        data : null
    })
})

const PORT = process.env

app.listen(8888, () => {
    console.log(`Listen to port : 8888`)
})