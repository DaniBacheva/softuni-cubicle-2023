const express = require ("express");
const hadlebars = require("express-handlebars");

const app = express();

const PORT = 5500;

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