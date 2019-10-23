const data = require('./json/user.json')
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/user', function (req, res) {
    res.json(data);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

