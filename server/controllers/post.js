const Post = require("../models/post.js");    

// Tüm postları getir
const getPosts = async (req, res) => {
  try {
    const getPosts = await Post.find();
    res.status(200).json(getPosts);
  } catch (error) {
    res.status(500).json({ message: "Postları getirme başarısız!" });
  }
};

// Post oluşturma
const createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Post oluşturulamadı!" });
  }
};

// Post güncelleme
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!update) {
      return res.status(404).json({ message: "Post bulunamadı!" });
    }

    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ message: "Post güncellenemedi!" });
  }
};

// Post silme
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    
    if (!deletedPost) {
      return res.status(404).json({ message: "Post bulunamadı!" });
    }

    res.status(200).json({ message: "Post Silindi" });
  } catch (error) {
    res.status(500).json({ message: "Post silinemedi!" });
  }
};

module.exports = { getPosts, createPost, updatePost, deletePost };