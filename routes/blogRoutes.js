const express = require('express')
const blogController = require('../controllers/blogController')

const router = express.Router()

// get blogs
router.get('/', blogController.blog_index)

// create blog
router.post('/', blogController.blog_create)

// get blog by id
router.get('/:id', blogController.blog_details)

// delete blog by id
router.delete('/:id', blogController.blog_delete)

module.exports = router