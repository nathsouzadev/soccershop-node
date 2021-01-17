const Product = require('../models/product');

exports.findAll = (req, res) => {
    Product.getAll((error, result) => {
        if (error) {
            return error;
        } res.send(result);
    })
}
