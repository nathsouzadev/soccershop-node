const app = require('./config/server');

app.listen(5000, function(){
    console.log("Server on!");
    console.log("CORS enabled!");
})
