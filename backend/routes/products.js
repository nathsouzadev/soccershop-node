module.exports = function(app) {
    
    app.get('/product', function(req, res){
        
        const conn = app.config.database();
        const query = app.models.getContent;
        
        query.getProducts(conn,
            function(error,results, fields){
                console.log(error,results);
                res.render('product',{ dados:results });
            });
    });
}
