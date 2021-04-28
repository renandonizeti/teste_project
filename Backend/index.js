const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
require('dotenv').config();
=======
>>>>>>> b3ebcf85ceb277d10c5a4dc7c5aa9658cfe46d0f

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
