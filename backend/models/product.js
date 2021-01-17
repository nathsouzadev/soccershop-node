const Conn = require('../config/database');

const Product = function(product) {
    return this;
}

Product.getAll = result => {
    const sql = "SELECT * FROM products JOIN categorys on categorys.id_categorys = products.fk_idcategorys";
    Conn.query(sql, (error, res) => {
        if (error){
            return error;
        } console.log("products: ", res);
        result(null, res);
    })
}

module.exports = Product;
