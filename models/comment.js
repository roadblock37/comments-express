const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
    {       currentUser: {
        type: Array,
        image: {
            type: Array,
            png: {
                type: String,
            },
            webp: {
                type: String,
            },
        },
        username: {
            type: String,
        },
    },
            comments: {
                type: Array,
                content: {
                    type: String,                
                },
                createdAt: {
                    tpye: String,
                },
                score: {
                    type: Number,
                },
                user: {
                    type: Array,
                    image: {
                        type: Array,
                        png: {
                            type: String,
                        },
                        webp: {
                            type: String,
                        },
                    },
                    username: {
                        type: String,
                    },
                },
                replies: {
                    type: Array,
                }
            },
    }
);
module.exports = mongoose.model('Comment', CommentSchema);