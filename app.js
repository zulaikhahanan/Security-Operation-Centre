
//Variables Declaration
var bodyParser = require('body-parser');
const session = require('express-session');
const express = require('express');
const app = express();
const path = require ('path');


// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Session
app.use(
    session({
      secret: 'SOCsecret',
      resave: true,
      saveUninitialized: true
    })
);

//Port
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});


//Routes
app.use('/', require('./routes/index'));

// Using ejs engine template
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

//Access to CSS,HTML from the Folder named 'public'
app.use(express.static(path.join(__dirname, 'public')));