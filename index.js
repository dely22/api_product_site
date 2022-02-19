const express = require("express");
// route
const path = require('path');
let initial_path = path.join(__dirname, "views");
const app = express();
app.use(express.static(initial_path));
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.ejs"));
})
app.get('/index', (req, res) => {
    res.sendFile(path.join(initial_path, "home.ejs"));
})

app.get('/connect', (req, res) => {
    res.sendFile(path.join(initial_path, "connect.ejs"));
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(initial_path, "login.ejs"));
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(initial_path, "register.ejs"));
})
app.get('/cart', (req, res) => {
    res.sendFile(path.join(initial_path, "cart.ejs"));
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(initial_path, "about.ejs"));
})




const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
// app.listen("5000");
app.use(express.static('views/css'));
app.use(express.static('views/js'));
app.use(express.static('views/img'));

console.log("server work");

app.get("/", (req, res) => {
    res.render("home");
})
// app.listen(process.env.PORT || 5000);

app.get('*', (req, res) => {
    res.statusCode = 404;
  	res.end(' Sorry, page not found');
})




app.listen("4000", () => {
    console.log('Server running at http://127.0.0.1:4000');
})