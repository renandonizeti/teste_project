const express = require('express');
const cors = require('cors');

const sequelize = require ('./src/db/db.js');

const app = express();

const routes = require ('./src/routes/routes.js');

app.use(cors());
app.use(express.json());
app.use('/sistema', routes);

const port = 3333;
sequelize.sync({force: false}).then( () => {
    app.set("port", port);
});

app.listen(3333, () => console.log('Servidor rodando na porta 3333'));
