const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/school');
let db = mongoose.connection;

db.once('open', function () {
    console.log('connected to database');
})
db.on('error', function (err) {
    console.log(err);
})

const app = express();
bodyParser = require('body-parser');
// app.use(cors(corsOptions));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// let studentApi = require('./api/students')
// let classApi = require('./api/classes')
// let teacherApi = require('./api/teachers');
// let userApi = require('./api/user');
const { Router } = require('express');
let customerApi = require ('./api/customer')

//const Salt = 10;


// app.post('/register', async function (req, res) {
//     try {
//         let response = await userApi.create(req.body)
//         res.json(response)
//     } catch (err) {
//         res.status(400).send({
//             message: err.message
//         });
//     }
// })

// app.post('/login', async function (req, res) {
//     try {
//         let response = await userApi.login(req.body)
//         res.json(response)
//     } catch (err) {
//         res.status(400).send({
//             message: err.message
//         });
//     }
// })
app.post('/customers', async function (req, res) {
    try {
        let response = await customerApi.create(req.body)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})

app.put('/customers/:id', async function (req, res) {
    try {
        let response = await customerApi.update(req.params.id, req.body)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})
app.get('/customers/:id', async function (req, res) {
    try {
        let response = await customerApi.get(req.params.id)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})

app.get('/customers', async function (req, res) {
    try {
        let response = await customerApi.search(req.query)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }

})

app.delete('/customers/:id', async function (req, res) {
    try {
        let response = await customerApi.delete(req.params.id)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})

app.listen(9090, function () {
    console.log('server started on port 9090...')
});