require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const mongoose = require('mongoose')
// const path = require('path')

const blogRoutes = require('./routes/blogRoutes')

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
// app.use(cors())
app.use(morgan('dev'));

// routes
app.use('/blogs', blogRoutes)

// production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}





