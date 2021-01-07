module.exports = function(app) {
    
    app.get('/coment', function(req, res){
        
        const conn = app.config.database();
        const query = app.models.getContent;
        
        query.getMessages(conn,
            function(error,results, fields){
                console.log(error,results);
                res.render('coments',{ dados:results });
            });
    });
}
