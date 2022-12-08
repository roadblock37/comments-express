const express = require("express");
const router = express.Router();

const {
  getAllComments,
  createComment,
  getComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

router.route("/").get(getAllComments).post(createComment);
router.route("/:id").get(getComment).patch(updateComment).delete(deleteComment);

module.exports = router;
