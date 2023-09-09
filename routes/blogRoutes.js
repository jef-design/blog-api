const express = require('express')
const { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } = require('../controllers/blogContollers.js')
const router = express.Router()

router.post('/create', createBlog)

router.get('/', getAllBlogs)

router.get('/:id', getBlog)

router.delete('/:id', deleteBlog)

router.patch('/:id', updateBlog)



module.exports = router
