import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/blogContollers.js'
const router = express.Router()

router.get('/', getAllBlogs)

router.get('/:id', getBlog)

router.post('/create', createBlog)

router.delete('/:id', deleteBlog)

router.patch('/:id', updateBlog)



export default router
