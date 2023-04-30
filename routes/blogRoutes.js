const express = require('express');
const router = express.Router();

const { createBlog, deleteBlog, getAllBlog, getBlog, updateBlog } = require('../controllers/blogControllers');

router.post('/createBlog', createBlog);
router.post('/deleteBlog', deleteBlog);
router.get('/getBlog/:id', getBlog);
router.get('/', getAllBlog);

module.exports = router;