import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [theme, setTheme] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    const blog = {
      "title": title,
      "body": text,
      "theme": theme,
      "imageID": Math.floor(Math.random() * 100),
      "date": new Date().toLocaleString("fr-FR")
    }

    fetch("/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
      .then(res => res.json())
      .then(() => {
        console.log('new blog sended')
        setIsLoading(false)
        history.push('/')
      }).catch((err) => console.log(err))

  }



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
          <label className="form-label">Theme</label>
          <select className="form-select" aria-label="Default select example" required
            value={theme} onChange={(event) => setTheme(event.target.value)}
          >
            <option value="" disabled className="text-hide">Please select</option>
            <option value="Reviews">Reviews</option>
            <option value="Science">Science</option>
            <option value="Tech">Tech</option>
          </select>
        </div>

        {!isLoading && <button type="submit" className="btn btn-dark">Add Blog</button>}
        {isLoading && <button type="button" className="btn btn-secondary" disabled>Adding Blog...</button>}
      </form>

    </div>
  )
}

export default Create
