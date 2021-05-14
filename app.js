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

let studentApi = require('./api/students')
let classApi = require('./api/classes')
let teacherApi = require('./api/teachers');
let userApi = require('./api/user');
const { Router } = require('express');

const Salt = 10;


app.post('/register', async function (req, res) {
    try {
        let response = await userApi.create(req.body)
        res.json(response)
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
})

app.post('/login', async function (req, res) {
    try {
        let response = await userApi.login(req.body)
        res.json(response)
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
})
app.post('/students', async function (req, res) {
    try {
        let response = await studentApi.create(req.body)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})

app.put('/students/:id', async function (req, res) {
    try {
        let response = await studentApi.update(req.params.id, req.body)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})
app.get('/students/:id', async function (req, res) {
    try {
        let response = await studentApi.get(req.params.id)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})

app.get('/students', async function (req, res) {
    try {
        let response = await studentApi.search(req.query)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }

})

app.delete('/students/:id', async function (req, res) {
    try {
        let response = await studentApi.delete(req.params.id)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }



})

app.post('/classes', async function (req, res) {
    try {
        let response = await classApi.create(req.body)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }

})

app.put('/classes/:id', async function (req, res) {
    try {
        let response = await classApi.update(req.params.id, req.body)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})

app.get('/classes/:id', async function (req, res) {
    try {
        let response = await classApi.get(req.params.id)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})

app.get('/classes', async function (req, res) {
    try {
        let response = await classApi.search(req.query)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})

app.delete('/classes/:id', async function (req, res) {
    try {
        let response = await classApi.delete(req.params.id)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})


app.post('/teachers', async function (req, res) {
    try {
        let response = await teacherApi.create(req.body)
        res.json(response)
    }
    catch (err) {
        res.json(err.message)
    }

})




app.put('/teachers/:id', async function (req, res) {
    try {
        let response = await teacherApi.update(req.params.id, req.body)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})

app.get('/teachers/:id', async function (req, res) {
    try {
        let response = await teacherApi.get(req.params.id)
        res.json(response)
    }
    catch (err) {
        res.json(err.message)
    }
})

app.get('/teachers', async function (req, res) {
    try {
        let response = await teacherApi.search(req.query)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})

app.delete('/teachers/:id', async function (req, res) {
    try {
        let response = await teacherApi.delete(req.params.id)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
})


app.listen(9090, function () {
    console.log('server started on port 9090...')
});