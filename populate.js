// require .env to access MONGO_URI
require('dotenv').config();

const data = require('./data.json');
const connectDB = require('./DB/connect');
// import model
const Comment = require('./models/comment');


const start = async () => {
    try {
        // connect to database
        await connectDB(process.env.MONGO_URI);
        // populate database with data
        await Comment.create(data);
        console.log('database populated successfully');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();