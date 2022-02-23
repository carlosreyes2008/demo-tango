const express = require('express');
const app = express();
const Consts = require('./libs/consts');
const Fibonacci = require('./controllers/fibonacci');

app.use(express.json());
app.get('/api/fibonacci/:fIndex', Fibonacci.Number);

app.get('/', (req, res, next) => {
    res.sendStatus(403);
});

app.listen(Consts.appPort, initialize());

async function initialize() {
    console.log(`Application initialized in port: ${Consts.appPort}`);
}