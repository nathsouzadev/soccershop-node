const { render } = require("../config/server");

module.exports = function(app) {
    
    app.get('/produto', function(req, res){
        
        const conn = app.config.database();
        const query = app.models.getContent;
        
        query.getProducts(conn,
            function(error,results, fields){
                console.log(error,results);
                res.json(results );
            });
    });
}
