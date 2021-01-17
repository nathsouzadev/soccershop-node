const express = require('express'),
    server = express(),
    cors = require('cors');
    
server.use(cors());
server.use(express.json());

require('./routes/comment.routes.js')(server);
require('./routes/product.routes.js')(server);

server.get('/', (req, res) =>{
    res.json({message: "Wellcome to Soccershop API"})
})

server.listen(5000, () => {
    console.log("Server on!")
});
