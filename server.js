var port = process.env.PORT || 3000;

var express = require("express");
var app = express();
var path = require("path");
var exphbs = require("express-handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.get("/", function(req, res) {
  res.render("login");
});

app.listen(port);