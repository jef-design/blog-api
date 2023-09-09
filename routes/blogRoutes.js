const express = require('express')
const { getAllBlogs, getBlog, createBlog, deleteBlog, updateBlog } = require('../controllers/blogContollers')
const router = express.Router()

router.get('/', getAllBlogs)

router.get('/:id', getBlog)

router.post('/create', createBlog)

router.delete('/:id', deleteBlog)

router.patch('/:id', updateBlog)



module.exports = router
