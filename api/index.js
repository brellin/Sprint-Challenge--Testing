const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express()

server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())

server.get('/', async (req, res) => {

    res.status(200).json({
        message: 'It worked'
    })

})

module.exports = server