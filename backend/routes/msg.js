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
        const msg = app.models.getContent;

        msg.sentMessages(content, conn, function(error, result){

        });

        msg.getMessages(conn, 
            function(error,result,fields){
                console.log(error,result);
                res.json(result)
            });
    })

}
