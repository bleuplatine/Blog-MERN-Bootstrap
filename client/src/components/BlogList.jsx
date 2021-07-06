import { Link } from "react-router-dom"

const BlogList = (props) => {

  const { blogs } = props
  // blogs.sort((a, b) => b.id - a.id)
  // console.log(blogs);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-3 g-4">
      {blogs.map(blog => (
        <div key={blog._id} className="col">
          <div className="card">
            <img src={`https://picsum.photos/id/${blog.imageID}/500/200`} className="card-img-top" alt="..."></img>
            <Link className="text-decoration-none text-reset" to={`/blogs/${blog._id}`}>
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.body.match(/^.{1,50}/) + '...'}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Written by {blog.author}</small>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogList
