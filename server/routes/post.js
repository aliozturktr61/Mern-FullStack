const express = require("express");
const { getPosts, createPost, updatePost, deletePost } = require("../controllers/post.js");

const router = express.Router();

router.get("/getPosts", getPosts);//tüm postları getirir
router.post("/createPost", createPost);//oluşturmak içim
router.patch("/updatePost/:id", updatePost);//id göre güncelleme
router.delete("/deletePost/:id", deletePost);//id göre silme
module.exports = router; 