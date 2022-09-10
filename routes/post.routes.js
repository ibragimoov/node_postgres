const Router = require("express");
const router = Router();
const PostController = require("../controllers/post.controller.js");

router.post("/post", PostController.createPost);
router.get("/post", PostController.getPostByUser);

module.exports = router;
