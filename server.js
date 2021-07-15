require('dotenv').config()

const express = require('express')
const morgan = require('morgan');
// const path = require('path')

const connectToDB = require('./config/db')
const blogRoutes = require('./routes/blogRoutes')

// connection to DB 
connectToDB()

const app = express()
const PORT = process.env.PORT

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

// running on server
app.listen(PORT, () => console.log(`Server is running`))





