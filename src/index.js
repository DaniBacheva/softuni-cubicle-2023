const express = require ("express");

const expressConfig = require('./config/expressConfig');
const hadlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./routes')

const app = express();

const PORT = 5500;

expressConfig(app);
hadlebarsConfig(app);

app.use(routes);

app.listen(PORT, ()=> console.log(`Server is running on port {PORT}`))