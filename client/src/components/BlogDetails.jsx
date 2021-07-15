import { useParams, useHistory } from "react-router-dom"

import useFetch from "./useFetch"

const BlogDetails = () => {
  const { id } = useParams()
  const history = useHistory()
  const { data: blog, isLoading, error } = useFetch('/blogs/' + id)


  const handleDelete = () => {
    fetch('/blogs/' + id, {
      method: "DELETE",
    }).then(() => {
      console.log('blog deleted')
      history.push('/')
    })
    // window.location = '/'
  }

  console.log(blog);

  return (
    <div className="container pt-5">

      {isLoading &&
        <div className="d-flex align-items-center ">
          <strong>Loading</strong>
          <div className="spinner-border ms-3 " role="status" aria-hidden="true"></div>
        </div>}

      {error &&
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div>
            {error}
          </div>
        </div>}

      {blog &&
        <div className="card bg-light shadow p-3 mb-5 bg-body rounded" >
        <div class="card-header text-warning bg-dark text-center font-monospace">{blog.theme}</div>
          <img src={`https://picsum.photos/id/${blog.imageID}/600/300`} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h4 className="card-title">{blog.title}</h4>
            <p className="card-text">{blog.body}</p>
            <footer className="blockquote-footer text-end pt-3">Published on <cite title="theme">{blog.date}</cite></footer>
            <button className="btn btn-dark"
              onClick={handleDelete}
            >Delete</button>
          </div>
        </div>}

    </div>
  )
}

export default BlogDetails
