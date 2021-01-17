module.exports = server => {
    const product = require('../controllers/product')

    server.get('/products', product.findAll);
};
