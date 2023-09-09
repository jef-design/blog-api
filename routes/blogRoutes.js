import express from 'express'
import { getAllBlogs, getBlog, createBlog, deleteBlog, updateBlog } from '../controllers/blogContollers.js'
const router = express.Router()

router.get('/', getAllBlogs)

router.get('/:id', getBlog)

router.post('/create', createBlog)

router.delete('/:id', deleteBlog)

router.patch('/:id', updateBlog)



export default router
