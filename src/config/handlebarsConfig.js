const hadlebars = require('express-handlebars')

function hadlebarsConfig (app) {

    //handlebars.config
app.engine('hbs', hadlebars.engine({
    extname:'hbs'
}));
app.set('view engine', 'hbs');
//set path to views
app.set('views', 'src/views')

}

module.exports = hadlebarsConfig