import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'

const Create = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    const blog = {
      "title": title,
      "body": text,
      "author": author,
      "imageID": Math.floor(Math.random() * 100)
    }

    axios.post("/blogs", blog)
      .then(() => {
        console.log('New blog sended')
        setIsLoading(false)
        history.push('/')
      })
      .catch((err) => console.log(err))
  }

  //   fetch("/blogs", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(blog)
  //   }).then(() => {
  //     console.log('new blog sended')
  //     setIsLoading(false)
  //     history.push('/')
  //   }).catch((err) => console.log(err))
  // }

  return (
    <div className="container pt-5">
      <h2 className="pb-4">Add a new Blog</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputTitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="inputTitle" required
            value={title} onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputTextarea" className="form-label">Text</label>
          <textarea className="form-control" id="inputTextarea" rows="3" required
            value={text} onChange={(event) => setText(event.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <select className="form-select" aria-label="Default select example" required
            value={author} onChange={(event) => setAuthor(event.target.value)}
          >
            <option value="" disabled className="text-hide">Please select</option>
            <option value="Luc Ferry">Luc Ferry</option>
            <option value="Eugénie Bastié">Eugénie Bastié</option>
          </select>
        </div>

        {!isLoading && <button type="submit" className="btn btn-primary">Add Blog</button>}
        {isLoading && <button type="button" className="btn btn-secondary" disabled>Adding Blog...</button>}
      </form>

    </div>
  )
}

export default Create
