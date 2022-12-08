const Comment = require("../models/comment");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

// get all comments
const getAllComments = async (req, res) => {
  const comments = await Comment.find({});
  res.status(200).json({ comments, nbHits: comments.length });
};

// create comment
const createComment = async (req, res) => {
  const comment = await Comment.create(req.body);
  res.status(201).json({ comment });
};

// get single comment using id
const getComment = async (req, res, next) => {
  const { id: commentID } = req.params;
  const comment = await Comment.findOne({ _id: commentID });
  if (!comment) {
    return next(createCustomError(`No comment with id : ${commentID}`, 404));
  }
  res.status(200).json({ comment });
};

// delete comment using id
const deleteComment = async (req, res, next) => {
  const { id: commentID } = req.params;
  const comment = await Comment.findOneAndDelete({ _id: commentID });

  if (!comment) {
    return next(createCustomError(`No comment with id : ${commentID}`, 404));
  }
  res.status(200).json({ comment });
};

// update comment using ID
const updateComment = async (req, res, next) => {
  const { id: commentID } = req.params;

  const comment = await Comment.findOneAndUpdate({ _id: commentID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!comment) {
    return next(createCustomError(`No comment with id : ${commentID}`, 404));
  }
  res.status(200).json({ comment });
};

module.exports = {
  getAllComments,
  createComment,
  getComment,
  updateComment,
  deleteComment,
};
