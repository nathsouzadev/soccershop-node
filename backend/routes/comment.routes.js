module.exports = server => {
    const comment = require('../controllers/comment');

    server.post('/comments', comment.create);
    server.get('/comments', comment.findAll);
    server.delete('/comments/:commentId', comment.delete);
};
