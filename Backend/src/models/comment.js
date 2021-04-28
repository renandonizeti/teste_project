const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');
const Comment = sequelize.define("comment", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
<<<<<<< HEAD
        type: Sequelize.INTEGER()
=======
        type: Sequelize.INTEGER
>>>>>>> b3ebcf85ceb277d10c5a4dc7c5aa9658cfe46d0f
    },
    user_comment: {
        allowNull: false,
        type: Sequelize.STRING(1000),
        validate: {
<<<<<<< HEAD
            len: [3, 1000],

=======
            len: [3, 1000]
>>>>>>> b3ebcf85ceb277d10c5a4dc7c5aa9658cfe46d0f
        }
    }
});

<<<<<<< HEAD
module.exports = Comment;
=======
module.exports = Comment;
>>>>>>> b3ebcf85ceb277d10c5a4dc7c5aa9658cfe46d0f
