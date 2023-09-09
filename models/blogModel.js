const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog
// const userSchema = new Schema(
//     {
//         username: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//         password: {
//             type: String,
//             required: true,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// const User = mongoose.model('User', userSchema)



