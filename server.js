const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

//app.use(express.static(path.join(__dirname,"public")));

require("./controller/htmlRoutes.js")(app);

app.listen(PORT,function(){
  console.log("Listening in on..."+PORT);
})
