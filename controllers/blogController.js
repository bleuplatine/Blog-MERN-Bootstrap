const mongoose = require('mongoose')

const Blog = require('../models/blog')

const blog_index = (req, res) => {
  Blog.find().sort({ _id: -1 })
    .then((blogs) => res.json(blogs))
    .catch((err) => console.log(err))
}

const blog_create = (req, res) => {
  const newBlog = new Blog(req.body);
  newBlog.save()
    // .then((res) => res.sendStatus(200))
    .then((blogs) => res.json(blogs))
    // .then(res.sendStatus(200))
    .then(result => console.log('New blog added to DB'))
    .catch(err => console.log(err));
}

const blog_details = (req, res) => {
  const id = req.params.id;
  if (!mongoose.isValidObjectId(id)) return res.status(404).json();
  Blog.findById(id)
    .then((blog) => res.json(blog))
    .catch(err => console.log(err));
}

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => res.sendStatus(200))
    // toujours renvoyer une réponse !! sinon aucune promesse retournée dans le fetch
    // .then((x) => res.sendStatus(200))
    // ou
    // .then((x) => res.json(x))

    .then(result => console.log('Blog deleted from DB'))
    .catch(err => console.log(err));
}


module.exports = { blog_index, blog_create, blog_details, blog_delete }