const express = require('express'); // impost thu vien
const sass = require('sass');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// Http logged
// app.use(morgan('combined'));

// Midleware xu ly du lieu tu body
app.use(
  express.urlencoded({
    extended: true,
  }),
);
    app.use(express.json());

// XmlHttpRequest, fetch, axios

// Template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
