//define language
const express = require('express');
const app = express();
// connect to Json and Connect PORT and connected Public folder to app
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
// connect to new routes we are creating
require("./routes/htmlRoutes")(app);
const PORT = process.env.PORT || 3000;
app.listen (PORT, function(){
    console.log("this app is listening on port 3000");
});
