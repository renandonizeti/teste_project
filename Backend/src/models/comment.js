const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');
const Comment = sequelize.define("comment", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    user_comment: {
        allowNull: false,
        type: Sequelize.STRING(1000),
        validate: {
            len: [3, 1000]
        }
    }
});

module.exports = Comment;