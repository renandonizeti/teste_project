const express = require('express');
const cors = require('cors');

require('dotenv').config();

const sequelize = require ('./db/db.js');

const app = express();

const routes = require ('./routes/routes.js');

app.use(cors());
app.use(express.json());
app.use('/sistema', routes);

const port = 3333;
sequelize.sync({force: false}).then( () => {
    app.set("port", port);
});

app.listen(3333, () => console.log('Servidor rodando na porta 3333'));
