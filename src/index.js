const express = require ("express");

const expressConfig = require('./config/expressConfig');
const hadlebarsConfig = require('./config/handlebarsConfig');

const app = express();

const PORT = 5500;

expressConfig(app);
hadlebarsConfig(app);

//routes
app.get('/', (req,res)=> {
    res.render("index")
});

app.listen(PORT, ()=> console.log(`Server is running on port {PORT}`))