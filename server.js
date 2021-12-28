const { Controler }  = require('./controller')
const express = require('express');
const cors = require('cors');

const PORT = 5000;
const app = express();
const SIZE_LIMIT = '100mb';
const controler = new Controler();

app.use((request, response, next) => {
    console.log(`New HTTP request: ${request.method} ${request.url}`);
    next();
  });

app.use(cors());

app.use(express.json({ limit: SIZE_LIMIT, extended: true }));
app.use(express.urlencoded({ limit: SIZE_LIMIT, extended: true }));
app.use('/api', controler.router);

const server = app.listen(PORT, () => {  
    console.log(`Listening on port ${PORT}.`);
});

module.exports = server;