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
            result(true, {error: "Message not sent"})
        } console.log("Message sent: ");
        result(null, {id: res.insert_id, ...newComment});
    })
}

Comment.delete = (id, result) => {
    const sql = "DELETE FROM comments WHERE id = ?";
    Conn.query(sql, id, (error, res) => {
        if(error){
            return error;
        }
        if (res.affectedRows == 0){
            result({kind: "not_found"}, null);
            return
        }
        console.log("Deteled message with id: ", id)
        result(null, res)
    })
}

module.exports = Comment;
