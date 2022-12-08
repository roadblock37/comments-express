const express = require("express");
const app = express();
const comments = require("./routes/commentRoutes");
const connectDB = require("./DB/connect");
require("dotenv").config();
// custom errors
const notFound = require("./middleware/not-found");
const errorHandlerMidleware = require("./middleware/error-handler");

// middleware

app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/comments", comments);
app.use(notFound);
app.use(errorHandlerMidleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
