const Comment = require('../models/comment');

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty"
        })
    }

    const comment = new Comment({
        name_msg: req.body.name_msg,
        msg: req.body.msg
    })

    Comment.create(comment, (error, results) => {
        if(error){
            res.send(results)
        } res.send(results);
    })
}

exports.findAll = (req, res) => {
    Comment.getAll((error, results) => {
        if(error){
            return error;
        } res.send(results);
    })
}

exports.delete = (req, res) => {
    const {commentId} = req.params
    Comment.delete(commentId, (error, results) => {
        if(error){
            return error;
        }   res.send({message: `Comment was deleted successfully`})
    })
}
