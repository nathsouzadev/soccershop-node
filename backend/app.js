const app = require('./config/server');

const routeHome = require('./routes/home')(app);
const routeProduct = require('./routes/products')(app);
const routeComents = require('./routes/coments')(app);

app.listen(5000, function(){
    console.log("Server on!");
    console.log("CORS enabled!");
})
