const express = require ("express");

const expressConfig = require('./config/expressConfig');
const hadlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const app = express();

const PORT = 5500;

expressConfig(app);
hadlebarsConfig(app);

app.use(homeController);
app.use('/cubes', cubeController);

app.get('*', (req,res) => {
    res.redirect ('/404')
});

app.listen(PORT, ()=> console.log(`Server is running on port {PORT}`))