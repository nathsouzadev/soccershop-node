module.exports = function(){
    
    this.getProducts = function(connection, callback){
        connection.query("SELECT * FROM products JOIN categorys on categorys.id_categorys = products.fk_idcategorys", callback);
    };

    this.getMessages = function(connection, callback){
        connection.query("SELECT * FROM comments", callback);
    };

    this.sentMessages = function(content, connection, callback){
        connection.query("INSERT INTO comments set ?", content);
    }
    
    return this
}
