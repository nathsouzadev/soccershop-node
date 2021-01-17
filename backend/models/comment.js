const Conn = require('../config/database');

const Comment = function (comment) {
    this.name_msg = comment.name_msg;
    this.msg = comment.msg;
}

Comment.getAll = result => {
    const sql = "SELECT * FROM comments";
    Conn.query(sql, (error, res) => {
        if (error){
            return error;
        } console.log("comments: ", res);
        result(null, res);
    })
}

Comment.create = (newComment, result) => {
    const sql = "INSERT INTO comments SET ?";
    Conn.query(sql, newComment, (error, res) => {
        if (error){
            return error;
        } console.log("Message sent: ");
        result(null, {id: res.insert_id, ...newComment});
    })
}

module.exports = Comment;
