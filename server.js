require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const mongoose = require('mongoose')

const Blog = require('./models/blog')

const app = express()
const PORT = process.env.PORT


// connect to DB & run server
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(app.listen(PORT, () => console.log(`Server is running`)))
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err))

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan('dev'));

// get blogs
app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then((blogs) => res.json(blogs))
    .catch((err) => console.log(err))
})

// add blogs
app.post('/newBlog', (req, res) => {
  const newBlog = new Blog(req.body);
  newBlog.save()
    .then(result => console.log('New blog added to DB'))
    .catch(err => console.log(err));
})

// get blog by id
app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => res.json(blog))
    .catch(err => console.log(err));
})

// delete blog by id
app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(result => console.log('Blog deleted from DB'))
    // .then((blog) => res.json(blog))
    .catch(err => console.log(err));
})

// production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}





