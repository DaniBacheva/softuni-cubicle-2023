const express = require ("express");
const hadlebars = require("express-handlebars");
const path = require('path')

const app = express();

const PORT = 5500;

//express config
app.use(express.static(path.resolve(__dirname,'public')));

//handlebars.config
app.engine('hbs', hadlebars.engine({
    extname:'hbs'
}));
app.set('view engine', 'hbs');
//set path to views
app.set('views', 'src/views')

//routes
app.get('/', (req,res)=> {
    res.render("index")
});

app.listen(PORT, ()=> console.log(`Server is running on port {PORT}`))