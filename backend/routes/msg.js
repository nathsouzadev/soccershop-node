module.exports = function(app) {
    
    app.get('/msg', function(req, res){
        const conn = app.config.database();
        const query = app.models.getContent;
        
        query.getMessages(conn,
            function(error,results, fields){
                console.log(error,results);
                res.json(results);
            });
    });

    app.post('/msg/sent', function(req, res){
        const content = req.body;
        const conn = app.config.database();
        const message = app.models.getContent;

        message.sentMessages(content, conn, function(error, result){
            console.log(error, result);
        });

        message.getMessages(conn, 
            function(error,result,fields){
                console.log(error,result);
                res.json(result)
            });
    })

}
