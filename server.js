//config
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));


//routes
require("./routes")(app);




//server
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));