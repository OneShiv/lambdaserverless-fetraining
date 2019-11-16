const express = require('express');

const app = express();
const todos = [
    { id: 1, name: 'clean up', status: 'open' },
    { id: 1, name: 'cook', status: 'done' }
];

app.get("/", (req, res) => {
    res.status(200).json({
        message: 'ok'
    })
});
app.get("/todo", (req, res) => {
    res.status(200).json(todos)
});

module.exports = app