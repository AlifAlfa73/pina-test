const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'));

app.listen(8080, (err) => {
    if (err) throw err
    console.log('Server running in https://127.0.0.1:8080')
});

module.exports = app