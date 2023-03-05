var express = require('express');
var path = require('path');


const api_router = require('./routes/api/router')

// initialize database connetion
const db = require('./db/db');
db.init();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// api routes
app.use('/api', api_router);



app.use(express.static(path.resolve("..", "client", "build")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve("..", "client", "build", "index.html"))
});

app.listen(process.env.PORT ?? 3000);
